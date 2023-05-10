import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

import Modal from './Modal';
import styles from '../styles/Note.module.scss';

type NoteProps = {
  id: Number;
  title: string;
  body: string;
  onEditTitle: (editedTitle: string, id: Number) => void;
  onEditBody: (editedBody: string, id: Number) => void;
  deleteNote: (id: number) => void;
  onClose: () => void;
}

const Note = (props: NoteProps) => {
  const [isOpen, setIsOpen] = useState(false);  

	return (
    <div className={styles.card} key={+props.id}>
			<div onClick={() => setIsOpen(true)}>
				<p className={styles.card_title}>{props.title}</p>
				<p className={styles.card_body}>{props.body}</p>
			</div>
			<div className={styles.card_footer}>
				<div
					className={styles.card_footer_gap}
					onClick={() => setIsOpen(true)}
				>
				</div>
				<button
					className={styles.card_footer_btn}
					onClick={() => props.deleteNote(+props.id)}
				>
					<FaTrash />
				</button>
			</div>
      <Modal
        id={props.id}
        body={props.body}
        title={props.title}
        onEditBody={props.onEditBody}
        onEditTitle={props.onEditTitle}
				openModal={isOpen}
				onClose={() => setIsOpen(false)}
			/>
		</div>
	);
};

export default Note;
