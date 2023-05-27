import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

import Modal from './Modal';
import styles from '../styles/Note.module.scss';

type NoteProps = {
	id: number;
	title: string;
	body: string;
	onEditTitle: (editedTitle: string, id: number) => void;
	onEditBody: (editedBody: string, id: number) => void;
	deleteNote: (id: number) => void;
	onClose: () => void;
};

const Note = (props: NoteProps) => {
	const { id, title, body, onEditTitle, onEditBody, deleteNote, onClose } =
		props;

	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={styles.card} key={`${id}`}>
			<div onClick={() => setIsOpen(true)}>
				<p className={styles.card_title}>{title}</p>
				<p className={styles.card_body}>{body}</p>
			</div>
			<div className={styles.card_footer}>
				<div
					className={styles.card_footer_gap}
					onClick={() => setIsOpen(true)}
				></div>
				<button
					className={styles.card_footer_btn}
					onClick={() => deleteNote(+id)}
				>
					<FaTrash />
				</button>
			</div>
			<Modal
				id={id}
				body={body}
				title={title}
				onEditBody={onEditBody}
				onEditTitle={onEditTitle}
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
			/>
		</div>
	);
};

export default Note;
