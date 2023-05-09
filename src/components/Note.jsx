import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

import { Modal } from './Modal';
import styles from '../styles/Note.module.scss';

export const Note = (props) => {
	const { id, body, onEditBody, title, onEditTitle, deleteNote } = props;
  const [isOpen, setIsOpen] = useState(false);  

  // const editBody = (e) => { onEditBody(e.target.value) }
  // const editTitle = (e) => { onEditTitle(e.target.value) }

  const handleDeleteNote = () => {
    console.log('onDeleteNote: ', id);
    deleteNote(id);
  }

  const onDebugThisMug = () => {
    console.log("ID: ", id, "Title: ", title, "Body: ", body);
  }

	return (
    <div className={styles.card} key={id}>
      <button onClick={onDebugThisMug}>debooger</button>
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
					onClick={handleDeleteNote}
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


