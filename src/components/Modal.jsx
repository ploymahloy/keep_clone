import ReactDom from 'react-dom';
import styles from '../styles/Modal.module.scss';

export default function Modal(props) {
	const { title, editTitle, body, editBody, open, onClose } = props;

	if (!open) return null;

	const handleTitleChange = (e) => {
		editTitle(e.target.value);
  };
  
	const handleBodyChange = (e) => {
		editBody(e.target.value);
	};

	return ReactDom.createPortal(
		<>
			<div className={styles.overlay} onClick={onClose} />
			<div className={styles.modal}>
				<div>
					<input
						className={styles.title}
						value={title}
						onChange={handleTitleChange}
					/>
					<textarea
						className={styles.body}
						value={body}
						onChange={handleBodyChange}
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
