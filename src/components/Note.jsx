import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

import Modal from './Modal';
import styles from '../styles/Note.module.scss';

const Note = (props) => {
	const { id, title, body, deleteNote } = props;

	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={styles.notes_card} key={id}>
			<div onClick={() => setIsOpen(true)}>
				<p className={styles.notes_card_title}>{title}</p>
				<p className={styles.notes_card_body}>{body}</p>
			</div>
			<div className={styles.notes_card_footer}>
				<div
					className={styles.notes_card_footer_gap}
					onClick={() => setIsOpen(true)}
				>
				</div>
				<button
					className={styles.notes_card_footer_btn}
					onClick={() => deleteNote(id)}
				>
					<FaTrash />
				</button>
			</div>
			<Modal
				title={title}
				body={body}
				open={isOpen}
				onClose={() => setIsOpen(false)}
			/>
		</div>
	);
};

export default Note;


