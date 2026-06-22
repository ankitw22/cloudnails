import { cleanName } from '../../utils/cleanName';
import styles from './ServicesSection.module.css';

function ArrowIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" width="10" height="10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

export default function ServiceCard({ service, index, onOpen }) {
  return (
    <div
      className={styles.svcCard}
      style={{ '--si': index }}
      onClick={() => onOpen(service)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpen(service)}
    >
      <div className={styles.svcName}>{cleanName(service.name)}</div>
      <div className={styles.svcDesc}>{service.desc}</div>
      <div className={styles.svcRow}>
        <div className={styles.svcP}>{service.price}</div>
        <div className={styles.svcD}>{service.dur}</div>
        <div className={styles.svcArrow}>
          <ArrowIcon />
        </div>
      </div>
    </div>
  );
}
