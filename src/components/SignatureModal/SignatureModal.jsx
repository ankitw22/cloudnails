import { useState, useEffect } from 'react';
import styles from './SignatureModal.module.css';

export default function SignatureModal({ isOpen, onSubmit, onSkip }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({ name: '', email: '', phone: '' });
    onSubmit();
  };

  const handleSkip = () => {
    setForm({ name: '', email: '', phone: '' });
    onSkip();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`${styles.sigBackdrop} ${isOpen ? styles.sigBackdropOpen : ''}`}
        onClick={handleSkip}
      />

      {/* Bottom sheet */}
      <div
        className={`${styles.sigSheet} ${isOpen ? styles.sigSheetOpen : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Confirm booking"
      >
        <div className={styles.pill} />

        {/* Header */}
        <div className={styles.sigHdr}>
          <div className={styles.sigHdrLeft}>
            <div className={styles.sigLogo}>Cloud Nails &amp; Psychic</div>
            <div className={styles.sigCity}>Inglewood, California</div>
          </div>
          <button className={styles.closeBtn} onClick={handleSkip} aria-label="Close">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" width="12" height="12">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className={styles.sigBody}>
          <div className={styles.sigHead}>Almost done</div>
          <p className={styles.sigSub}>
            Enter your details to receive your booking confirmation and appointment reminders.
          </p>

          <form id="sig-form" onSubmit={handleSubmit}>
            <div className={styles.fld}>
              <label htmlFor="sig-name">Your name</label>
              <input id="sig-name" name="name" type="text" placeholder="e.g. Jessica Williams" value={form.name} onChange={handleChange} autoComplete="name" required />
            </div>
            <div className={styles.fld}>
              <label htmlFor="sig-email">Email address</label>
              <input id="sig-email" name="email" type="email" placeholder="you@email.com" value={form.email} onChange={handleChange} autoComplete="email" required />
            </div>
            <div className={styles.fld}>
              <label htmlFor="sig-phone">Mobile phone</label>
              <input id="sig-phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={handleChange} autoComplete="tel" />
            </div>

            <div className={styles.cbBlock}>
              <div className={styles.cbTop}>
                <input type="checkbox" className={styles.cb} id="sig-txn" />
                <span className={styles.cbTtl}>Transactional &amp; Notification Messages</span>
              </div>
              <p className={styles.cbDesc}>
                By checking this box, I consent to receive transactional and notification SMS messages from Cloud Nails &amp; Psychic,
                including but not limited to OTPs, account alerts, appointment reminders, service updates, and order-related information,
                sent to my registered contact details. Message and data rates may apply. Message frequency may vary.
                Reply HELP for help and STOP to opt out at any time.
              </p>
            </div>

            <div className={styles.cbBlock}>
              <div className={styles.cbTop}>
                <input type="checkbox" className={styles.cb} id="sig-promo" />
                <span className={styles.cbTtl}>Promotional &amp; Marketing Messages</span>
              </div>
              <p className={styles.cbDesc}>
                I agree to receive promotional and marketing communications, including offers, promotions, wellness programs,
                and campaign-related updates on my registered contact details. Message and data rates may apply.
                Communication frequency may vary. Reply HELP for help and STOP to opt-out.
              </p>
            </div>

            <p className={styles.sigLegal}>
              By signing up, you agree to receive business-related SMS messages sent via Cloud Nails &amp; Psychic.
              Message frequency varies. Message &amp; data rates may apply. Reply STOP to opt out at any time.
              Reply HELP for support. <span style={{ color: 'var(--ink2)' }}>Privacy Policy · Terms of Service</span>
            </p>
          </form>
        </div>

        {/* Sticky footer */}
        <div className={styles.sigFoot}>
          <button type="submit" form="sig-form" className="btn btn-rose" style={{ width: '100%', padding: '13px', borderRadius: '10px' }}>
            Confirm Booking
          </button>
          <button className="btn btn-ghost" style={{ width: '100%', padding: '11px', borderRadius: '10px' }} onClick={handleSkip}>
            Skip for now
          </button>
        </div>
      </div>
    </>
  );
}
