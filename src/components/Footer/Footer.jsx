import styles from './Footer.module.css';

export default function Footer({ onBookNow }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footW}>
        <a href="#" className={styles.footLogo}>Cloud Nails &amp; Psychic</a>

        <ul className={styles.footLinks}>
          <li><a href="#services">Menu</a></li>
          <li><a href="#hours">Hours</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <button className="btn btn-ghost" onClick={onBookNow}>
              Book Now
            </button>
          </li>
        </ul>
      </div>

      <p className={styles.footCopy}>
        &copy; {new Date().getFullYear()} Cloud Nails &amp; Psychic. All rights reserved. &nbsp;·&nbsp; Inglewood, California
      </p>
    </footer>
  );
}
