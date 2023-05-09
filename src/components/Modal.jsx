import ReactDom from 'react-dom';
import styles from '../styles/Modal.module.scss';

export const Modal = (props) => {
	const { id, body, title, onEditBody, onEditTitle, open, onClose } = props;

	if (!open) return null;

	const onUpdateNoteBody = (e) => {
		console.log('onUpdateNoteBody: ', e.target.value, id);
		onEditBody(e.target.value, id);
	};

	const onUpdateNoteTitle = (e) => {
		console.log('onUpdateNoteTitle: ', e.target.value, id);
		onEditTitle(e.target.value, id);
	};

	return ReactDom.createPortal(
		<>
      <div className={styles.overlay} onClick={onClose} />
			<div className={styles.modal} key={id}>
				<div>
					<input
						className={styles.title}
						value={title}
						onChange={onUpdateNoteTitle}
					/>
					<textarea
						className={styles.body}
						value={body}
						onChange={onUpdateNoteBody}
					/>
				</div>
				<button className={styles.button} onClick={onClose}>
					Close
				</button>
			</div>
		</>,
		document.getElementById('portal')
	);
}
