import { useState, useEffect } from 'react';
import { cleanName } from '../../utils/cleanName';
import styles from './ServiceDrawer.module.css';

function formatDur(dm) {
  if (dm < 60) return dm + ' min';
  const h = Math.floor(dm / 60);
  const m = dm % 60;
  return h + ' hr' + (m ? ' ' + m + ' min' : '');
}

export default function ServiceDrawer({ service, onClose, onAddToAppointment }) {
  const [selectedOpt, setSelectedOpt] = useState(0);
  const isOpen = !!service;

  // Reset option when service changes
  useEffect(() => {
    setSelectedOpt(0);
  }, [service]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const opt = service ? service.opts[selectedOpt] : null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ''}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`} role="dialog" aria-modal="true">
        <div className={styles.dPill} />

        <div className={styles.dHdr}>
          <div>
            <div className={styles.dBack} onClick={onClose}>← All Services</div>
            <div className={styles.dTitle}>
              {service ? cleanName(service.name) : ''}
            </div>
            <div className={styles.dMeta}>
              {service
                ? (service.price === 'Varies' ? 'Price varies' : 'From ' + service.price) + ' · ' + service.dur
                : ''}
            </div>
          </div>
          <button className={styles.dClose} onClick={onClose} aria-label="Close">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" width="12" height="12">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className={styles.dBody}>
          {service && (
            <>
              <div className={styles.dOptsLbl}>Choose an option</div>
              {service.opts.map((o, i) => (
                <div
                  key={i}
                  className={`${styles.dOpt} ${i === selectedOpt ? styles.dOptSel : ''}`}
                  onClick={() => setSelectedOpt(i)}
                >
                  <div>
                    <div className={styles.dOptName}>{o.n}</div>
                    <div className={styles.dOptSub}>{o.p} · {formatDur(o.dm)}</div>
                  </div>
                  <div className={styles.dRadio} />
                </div>
              ))}
            </>
          )}
        </div>

        <div className={styles.dFoot}>
          <div className={styles.dPrice}>{opt ? opt.p : ''}</div>
          <button
            className="btn btn-dark"
            style={{ flex: 1, padding: '12px' }}
            onClick={() => onAddToAppointment(selectedOpt)}
          >
            Add to Appointment →
          </button>
        </div>
      </div>
    </>
  );
}
