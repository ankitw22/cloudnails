import styles from './Nav.module.css';

export default function Nav({ onBookNow }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.navW}>
        <a href="#" className={styles.navLogo}>Cloud Nails &amp; Psychic</a>

        <ul className={styles.navLinks}>
          <li><a href="#services">Services</a></li>
          <li><a href="#hours">Hours</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className={styles.navRight}>
          <button className="btn btn-dark" onClick={onBookNow}>Sign Up</button>
        </div>
      </div>
    </nav>
  );
}
