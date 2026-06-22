import styles from './PhotoWall.module.css';

const PHOTOS = [
  { src: '/images/nail-art.png', label: 'Nail Art' },
  { src: '/images/acrylic-sets.png', label: 'Acrylic Sets' },
  { src: '/images/gel-extensions.png', label: 'Gel Extensions' },
];

export default function PhotoWall() {
  return (
    <div className={styles.photoWall}>
      {PHOTOS.map(({ src, label }) => (
        <div className={styles.pwItem} key={label}>
          <img src={src} alt={label} />
          <div className={styles.pwOverlay} />
          <span className={styles.pwLabel}>{label}</span>
        </div>
      ))}
    </div>
  );
}
