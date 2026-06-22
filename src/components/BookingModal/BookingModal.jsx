import { useState, useEffect, useRef } from 'react';
import { SVC } from '../../data/services';
import { cleanName } from '../../utils/cleanName';
import styles from './BookingModal.module.css';

export default function BookingModal({ isOpen, onClose, onSubmit }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '' });
  const firstInputRef = useRef(null);

  // Focus first input when modal opens
  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      setTimeout(() => firstInputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({ name: '', phone: '', email: '', service: '' });
    onSubmit();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className={`${styles.bmOverlay} ${isOpen ? styles.bmOverlayOpen : ''}`}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label="Book appointment"
    >
      <div className={styles.bmCard}>
        <button className={styles.bmClose} onClick={onClose} aria-label="Close modal">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" width="14" height="14">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className={styles.bmHdr}>
          <div className={styles.bmEyebrow}>Inglewood, CA</div>
          <div className={styles.bmTitle}>Book an Appointment</div>
          <p className={styles.bmSub}>
            Fill in your details and we'll reach out within 24 hours to confirm your appointment.
          </p>
        </div>

        <form className={styles.bmForm} onSubmit={handleSubmit}>
          <div className={styles.bmField}>
            <label className={styles.bmLbl} htmlFor="bm-name">Your name</label>
            <input
              ref={firstInputRef}
              id="bm-name"
              name="name"
              type="text"
              className={styles.bmInp}
              placeholder="e.g. Jessica Williams"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
          </div>

          <div className={styles.bmField}>
            <label className={styles.bmLbl} htmlFor="bm-phone">Phone number</label>
            <input
              id="bm-phone"
              name="phone"
              type="tel"
              className={styles.bmInp}
              placeholder="+1 (555) 000-0000"
              value={form.phone}
              onChange={handleChange}
              required
              autoComplete="tel"
            />
          </div>

          <div className={styles.bmField}>
            <label className={styles.bmLbl} htmlFor="bm-email">
              Email address <span className={styles.bmOpt}>(optional)</span>
            </label>
            <input
              id="bm-email"
              name="email"
              type="email"
              className={styles.bmInp}
              placeholder="you@email.com"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>

          <div className={styles.bmField}>
            <label className={styles.bmLbl} htmlFor="bm-service">
              Preferred service <span className={styles.bmOpt}>(optional)</span>
            </label>
            <select
              id="bm-service"
              name="service"
              className={styles.bmInp}
              value={form.service}
              onChange={handleChange}
            >
              <option value="">Select a service…</option>
              {SVC.map((s) => (
                <option key={s.id} value={s.id}>{cleanName(s.name)}</option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-rose" style={{ width: '100%', padding: '14px 24px', marginTop: '0.4rem', borderRadius: '10px' }}>
            Request Appointment
          </button>
        </form>

        <div className={styles.bmFoot}>
          <p>
            By requesting an appointment you agree to be contacted by Cloud Nails &amp; Psychic via phone or email.
          </p>
        </div>
      </div>
    </div>
  );
}
