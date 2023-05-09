import ReactDom from 'react-dom';
import styles from '../styles/Modal.module.scss';

const Modal = (props) => {
	const { id, body, title, onEditBody, onEditTitle, open, onClose } = props;

	if (!open) return null;

	return ReactDom.createPortal(
		<>
			<div className={styles.overlay} onClick={onClose} />
			<div className={styles.modal} key={id}>
				<div>
					<input
						className={styles.title}
						value={title}
						onChange={(e) => onEditTitle(e.target.value, id)}
					/>
					<textarea
						className={styles.body}
						value={body}
						onChange={(e) => onEditBody(e.target.value, id)}
					/>
				</div>
				<button className={styles.button} onClick={onClose}>
					Close
				</button>
			</div>
		</>,
		document.getElementById('portal')
	);
};

export default Modal;
