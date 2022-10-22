import ReactDom from 'react-dom';
import styles from '../styles/Modal.module.scss';

export default function Modal(props) {
  const {
    body,
    title,
    open,
    onClose
  } = props

	if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className={styles.OVERLAY_STYLES} onClick={onClose} />
      <div className={styles.MODAL_STYLES}>
        <div>
					<p className={styles.title}>{title}</p>
					<p className={styles.body}>{body}</p>
        </div>
        <button className={styles.button} onClick={onClose}>Close</button>
      </div>
    </>,
    document.getElementById('portal')
	);
}
