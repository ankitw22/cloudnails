import styles from './Toast.module.css';

export default function Toast({ message }) {
  return (
    <div className={`${styles.toast} ${message ? styles.toastShow : ''}`} role="status" aria-live="polite">
      {message}
    </div>
  );
}
