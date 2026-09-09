import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import styles from './LegalPage.module.css';

export default function LegalPage({ title, effectiveDate, children }) {
  const navigate = useNavigate();

  // Land at the top when a legal page is opened directly.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header className={styles.legalNav}>
        <div className={styles.legalNavW}>
          <Link to="/" className={styles.legalLogo}>Cloud Nails &amp; Psychic</Link>
          <Link to="/" className={styles.backLink}>&larr; Back to site</Link>
        </div>
      </header>

      <main className={styles.legalMain}>
        <div className={styles.legalWrap}>
          <p className={styles.eyebrow}>Cloud Nails and Psychic</p>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.effective}>Effective Date: {effectiveDate}</p>

          <div className={styles.body}>
            {children}
          </div>
        </div>
      </main>

      <Footer onBookNow={() => navigate('/')} />
    </>
  );
}
