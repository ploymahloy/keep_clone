import ReactDom from 'react-dom';
import styles from '../styles/Modal.module.scss';

type ModalProps = {
	id: number;
	body: string;
	title: string;
	isOpen: Boolean;
	onEditTitle: (editedTitle: string, id: number) => void;
	onEditBody: (editedBody: string, id: number) => void;
	onClose: () => void;
};

const Modal = (props: ModalProps) => {
	const { id, body, title, isOpen, onEditTitle, onEditBody, onClose } = props;

	if (!isOpen) return null;

	return ReactDom.createPortal(
		<>
			<div className={styles.overlay} onClick={onClose} />
			<div className={styles.modal} key={+id}>
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
		document.getElementById('portal')!
	);
};

export default Modal;
