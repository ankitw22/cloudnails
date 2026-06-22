import { useEffect, useRef } from 'react';
import { HOURS } from '../../data/hours';
import { CONTACT } from '../../data/contact';
import styles from './HoursContact.module.css';

// JS getDay(): 0=Sun,1=Mon,...,6=Sat
// (getDay()+6)%7 maps to: 0=Mon,1=Tue,...,6=Sun — matches HOURS array index
function getTodayIndex() {
  return (new Date().getDay() + 6) % 7;
}

function PinIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" width="14" height="14">
      <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" width="14" height="14">
      <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" width="14" height="14">
      <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

export default function HoursContact({ onBookNow }) {
  const todayIndex = getTodayIndex();

  return (
    <div className={styles.hcSec} id="hours">
      <div className={styles.hcGrid}>
        {/* Hours */}
        <div>
          <p className="sec-ey">When to Find Us</p>
          <h2 className="sec-h" style={{ marginBottom: '1.75rem' }}>Hours</h2>

          {HOURS.map((row, i) => {
            const isToday = i === todayIndex;
            return (
              <div
                key={row.day}
                className={`${styles.hRow} ${isToday ? styles.hRowToday : ''}`}
              >
                <span className={styles.hDay}>
                  {row.day}
                  {isToday && <span className={styles.hTodayTag}>Today</span>}
                </span>
                {row.closed
                  ? <span className={styles.hOff}>Closed</span>
                  : <span className={styles.hTime}>{row.time}</span>
                }
              </div>
            );
          })}
        </div>

        {/* Contact */}
        <div id="contact">
          <p className="sec-ey">Get in Touch</p>
          <h2 className="sec-h" style={{ marginBottom: '1.75rem' }}>Contact</h2>

          <div className={styles.cStack}>
            <div className={styles.cRow}>
              <div className={styles.cIcon}><PinIcon /></div>
              <div>
                <div className={styles.cLbl}>Address</div>
                <div className={styles.cVal}>{CONTACT.address}</div>
              </div>
            </div>

            <div className={styles.cRow}>
              <div className={styles.cIcon}><PhoneIcon /></div>
              <div>
                <div className={styles.cLbl}>Phone</div>
                <div className={styles.cVal}>
                  <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
                </div>
              </div>
            </div>

            <div className={styles.cRow}>
              <div className={styles.cIcon}><MailIcon /></div>
              <div>
                <div className={styles.cLbl}>Email</div>
                <div className={styles.cVal}>
                  <a href={CONTACT.emailHref}>{CONTACT.email}</a>
                </div>
              </div>
            </div>

            <button
              className="btn btn-dark"
              style={{ marginTop: '0.5rem', padding: '12px 22px', alignSelf: 'flex-start' }}
              onClick={onBookNow}
            >
              Book Your Appointment →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
