import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

const CHIPS = ['Acrylic Fullset', 'Gel-X', 'Nail Art', 'Manicure', 'Pedicure'];

const VIDEO_SRC = 'https://videos.pexels.com/video-files/5999375/5999375-uhd_2732_1440_25fps.mp4';
const VIDEO_POSTER = 'https://images.pexels.com/videos/5999375/pexels-photo-5999375.jpeg';

export default function Hero({ onBookNow }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const video = videoRef.current;
    if (!video) return;

    if (mq.matches) {
      video.style.display = 'none';
    } else {
      video.play().catch(() => {});
    }
  }, []);

  const handleExplore = (e) => {
    e.preventDefault();
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroFrame}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={VIDEO_POSTER}
          aria-hidden="true"
          className={styles.heroVideo}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>

        <div className={styles.heroOverlay}>
          <div className={styles.heroInner}>
            <p className={styles.heroEyebrow}>Nail studio &mdash; Inglewood, CA</p>
            <h1 className={styles.heroH1}>
              Cloud Nails<br /><em>&amp; Psychic</em>
            </h1>
            <p className={styles.heroLede}>
              Acrylic, Gel-X and bespoke nail art &mdash; every set hand-finished with gel polish, open late in the heart of Inglewood.
            </p>
            <div className={styles.heroCtas}>
              <button className={styles.heroCtaPrimary} onClick={onBookNow}>
                Sign Up
              </button>
              <a className={styles.heroCtaGhost} href="#services" onClick={handleExplore}>
                Explore the menu
              </a>
            </div>
            <ul className={styles.heroChips} role="list" aria-label="Services offered">
              {CHIPS.map((chip) => (
                <li key={chip}>{chip}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
