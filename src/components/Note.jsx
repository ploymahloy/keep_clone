import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

import Modal from './Modal';
import styles from '../styles/Note.module.scss';

const Note = (props) => {
	const { id, body, onEditBody, title, onEditTitle, deleteNote } = props;
  const [isOpen, setIsOpen] = useState(false);  

	return (
    <div className={styles.card} key={id}>
			<div onClick={() => setIsOpen(true)}>
				<p className={styles.card_title}>{title}</p>
				<p className={styles.card_body}>{body}</p>
			</div>
			<div className={styles.card_footer}>
				<div
					className={styles.card_footer_gap}
					onClick={() => setIsOpen(true)}
				>
				</div>
				<button
					className={styles.card_footer_btn}
					onClick={() => deleteNote(id)}
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
				open={isOpen}
				onClose={() => setIsOpen(false)}
			/>
		</div>
	);
};

export default Note;
