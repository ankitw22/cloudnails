import LegalPage from './LegalPage';
import styles from './LegalPage.module.css';

export default function TermsOfService() {
  return (
    <LegalPage title="Terms of Service" effectiveDate="September 4, 2026">
      <p>
        These Terms of Service ("Terms") govern your use of the Cloud Nails and Psychic website,
        online forms, appointment booking, nail and beauty services, psychic or intuitive reading
        services, customer support, promotions, and SMS/text messaging program (collectively, the
        "Services"). By accessing or using the Services, booking an appointment, making a
        purchase, or submitting information through our website, you agree to these Terms.
      </p>

      <h2>1. Services</h2>
      <p>Cloud Nails and Psychic may provide services including:</p>
      <ul>
        <li>Nail services, manicures, pedicures, nail enhancements, nail art, and related beauty services.</li>
        <li>Psychic, intuitive, spiritual, tarot, or similar reading services.</li>
        <li>Appointment scheduling, confirmations, reminders, rescheduling, and customer support.</li>
        <li>Promotional offers and marketing communications where the customer has specifically opted in.</li>
      </ul>
      <p>Service availability, pricing, duration, and individual results may vary.</p>

      <h2>2. Psychic and Spiritual Reading Disclaimer</h2>
      <p>
        Psychic, intuitive, tarot, and spiritual reading services are provided for entertainment,
        personal insight, and spiritual reflection purposes only. They are not a substitute for
        medical, mental health, legal, financial, or other licensed professional advice. Cloud
        Nails and Psychic does not guarantee any prediction, outcome, result, or future event.
        Customers remain responsible for their own decisions and actions.
      </p>

      <h2>3. Nail and Beauty Service Disclaimer</h2>
      <p>
        Before receiving nail or beauty services, customers should disclose known allergies,
        sensitivities, injuries, infections, nail conditions, or other concerns that may affect
        the service. Cloud Nails and Psychic may refuse or stop a service when performing it could
        be unsafe or inappropriate. Product wear, appearance, durability, and results can vary
        based on natural nail condition, lifestyle, aftercare, and other factors.
      </p>

      <h2>4. Appointments, Deposits, Cancellations, and No-Shows</h2>
      <p>
        Appointment, deposit, cancellation, rescheduling, late-arrival, and no-show requirements
        will be disclosed at the time of booking when applicable. By booking a service, you agree
        to any booking-specific terms presented before confirmation or payment.
      </p>

      <h2>5. Payments and Refunds</h2>
      <p>
        Prices and applicable charges are disclosed before purchase or service when reasonably
        practicable. Completed services are generally non-refundable except where required by
        law. If you have a concern with a service, contact Cloud Nails and Psychic promptly so we
        can review the issue and determine an appropriate resolution.
      </p>

      <h2>6. SMS/Text Messaging Terms</h2>
      <p>
        When you voluntarily provide your mobile number and affirmatively opt in, you authorize
        Cloud Nails and Psychic to send SMS/text messages related to the communications you
        selected. Messages may include appointment confirmations, reminders, service updates,
        customer support, and promotional or marketing messages if you have opted in to receive
        them.
      </p>
      <ul>
        <li>Message frequency varies.</li>
        <li>Message and data rates may apply.</li>
        <li>Consent to receive marketing text messages is not a condition of purchasing any goods or services.</li>
        <li>Reply STOP at any time to opt out. You may receive one final message confirming your opt-out.</li>
        <li>Reply HELP for help or use the contact information available on our website.</li>
        <li>Wireless carriers are not liable for delayed or undelivered messages.</li>
      </ul>
      <p>
        SMS consent applies only to Cloud Nails and Psychic and the messaging program for which
        you opted in. Consent is not sold, assigned, or transferred to another business for its
        marketing.
      </p>

      <h2>7. Website and Acceptable Use</h2>
      <p>
        You agree not to misuse our website or Services, attempt unauthorized access, interfere
        with website functionality, submit fraudulent or misleading information, infringe
        intellectual property rights, or use the Services for unlawful purposes.
      </p>

      <h2>8. Intellectual Property</h2>
      <p>
        Unless otherwise stated, website text, branding, graphics, service descriptions, and other
        original content owned by Cloud Nails and Psychic may not be copied, reproduced, or
        commercially used without permission, except as allowed by law.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by applicable law, Cloud Nails and Psychic will not be
        liable for indirect, incidental, special, consequential, or punitive damages arising from
        the use of the website or Services. Nothing in these Terms excludes rights or liabilities
        that cannot legally be excluded.
      </p>

      <h2>10. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. Updated Terms will be posted on our website
        with a revised effective date. Continued use of the Services after an update means you
        accept the revised Terms to the extent permitted by law.
      </p>

      <h2>11. Contact</h2>
      <p>
        For questions about these Terms, contact Cloud Nails and Psychic using the contact
        information published on our website.
      </p>

      <p className={styles.footNote}>
        Website publication copy &middot; Cloud Nails and Psychic &middot; Effective September 4, 2026
      </p>
    </LegalPage>
  );
}
