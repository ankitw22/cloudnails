import { SVC } from '../../data/services';
import ServiceCard from './ServiceCard';
import styles from './ServicesSection.module.css';

export default function ServicesSection({ onOpenService }) {
  const nails = SVC.filter((s) => s.cat === 'nails');
  const feet = SVC.filter((s) => s.cat === 'feet');

  return (
    <section className={styles.servicesSec} id="services">
      <div className={styles.wrap}>
        <div className={styles.svcHdr}>
          <div>
            <p className="sec-ey">What We Offer</p>
            <h2 className="sec-h">Our Services</h2>
          </div>
          <button className={styles.svcHdrLink} onClick={onOpenService.bind(null, null)}>
            Book an Appointment →
          </button>
        </div>

        <div className={styles.svcGrid}>
          {/* Nail Services */}
          <div className={styles.svcDivider}>
            <span className={styles.svcDividerLbl}>Nail Services</span>
            <div className={styles.svcDividerLine} />
          </div>

          {nails.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={i}
              onOpen={onOpenService}
            />
          ))}

          {/* Foot Services */}
          <div className={styles.svcDivider}>
            <span className={styles.svcDividerLbl}>Foot Services</span>
            <div className={styles.svcDividerLine} />
          </div>

          {feet.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={nails.length + i}
              onOpen={onOpenService}
            />
          ))}
        </div>

        <div className={styles.surcharge}>
          <div className={styles.surchargeDot} />
          <p>
            <strong>Credit/Debit card surcharge:</strong> A small processing fee may apply for card payments. Cash is always welcome.
          </p>
        </div>
      </div>
    </section>
  );
}
