import LegalPage from './LegalPage';
import styles from './LegalPage.module.css';

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" effectiveDate="September 4, 2026">
      <p>
        Cloud Nails and Psychic ("we," "us," or "our") respects your privacy. This Privacy Policy
        explains how we collect, use, disclose, and protect information when you visit our
        website, submit a form, book nail or psychic services, make a purchase, contact us, or
        participate in our SMS/text messaging program.
      </p>

      <h2>1. Information We May Collect</h2>
      <p>Depending on how you interact with us, we may collect:</p>
      <ul>
        <li>Name and contact information, including email address and mobile phone number.</li>
        <li>Appointment, booking, service preference, and customer support information.</li>
        <li>Billing, transaction, and payment-related information handled directly or through payment providers.</li>
        <li>Messages, inquiries, form submissions, feedback, and other information you voluntarily provide.</li>
        <li>SMS/text messaging opt-in records, consent information, message preferences, and opt-out requests.</li>
        <li>Basic website and device information such as IP address, browser type, device type, pages visited, and cookies where used.</li>
      </ul>

      <h2>2. How We Use Information</h2>
      <p>We may use information to:</p>
      <ul>
        <li>Schedule, manage, confirm, and provide appointments and services.</li>
        <li>Process transactions and maintain appropriate business records.</li>
        <li>Respond to questions and provide customer support.</li>
        <li>Send service-related communications, appointment confirmations, and reminders.</li>
        <li>Send promotional or marketing communications only where permitted and, for SMS, where you have affirmatively opted in.</li>
        <li>Improve our website, customer experience, security, and business operations.</li>
        <li>Prevent fraud, protect our rights, and comply with legal obligations.</li>
      </ul>

      <h2>3. SMS/Text Messaging Privacy</h2>
      <p>
        <strong>No mobile information will be shared with third parties or affiliates for
        marketing or promotional purposes.</strong> Information sharing with service providers may
        occur only as reasonably necessary to support our business operations and deliver
        requested services.
      </p>
      <p>
        <strong>All categories of data sharing described in this Privacy Policy exclude text
        messaging originator opt-in data and consent; this information will not be shared with
        any third parties for their marketing or promotional purposes.</strong>
      </p>
      <p>
        Cloud Nails and Psychic does not sell, rent, assign, or transfer your SMS consent to
        another business for that business's marketing. Your text-messaging consent is specific
        to Cloud Nails and Psychic and the messaging program for which you opted in.
      </p>

      <h2>4. SMS Choices and Opt-Out</h2>
      <ul>
        <li>Reply STOP to any qualifying SMS message to opt out of future messages from that program.</li>
        <li>You may receive one final confirmation text after opting out.</li>
        <li>Reply HELP for assistance or use the contact information provided on our website.</li>
        <li>Opting out of marketing texts does not prevent us from responding to a separate request you initiate or sending communications otherwise permitted by law.</li>
      </ul>

      <h2>5. How We Share Information</h2>
      <p>
        We may disclose information to vendors and service providers that help us operate our
        website, process payments, manage appointments, provide communications, maintain records,
        or support our business. We may also disclose information when required by law, to
        protect legal rights or safety, or in connection with a business transaction as permitted
        by law.
      </p>
      <p>
        SMS opt-in data and consent are excluded from any general sharing provision for marketing
        or promotional purposes, as stated above.
      </p>

      <h2>6. Cookies and Website Technologies</h2>
      <p>
        Our website may use cookies or similar technologies for essential functionality,
        security, analytics, and user experience. Browser settings may allow you to control
        certain cookies, although disabling them may affect website functionality.
      </p>

      <h2>7. Data Security</h2>
      <p>
        We use reasonable administrative, technical, and organizational measures designed to
        protect personal information. However, no method of internet transmission or electronic
        storage can be guaranteed to be completely secure.
      </p>

      <h2>8. Data Retention</h2>
      <p>
        We retain personal information for as long as reasonably necessary for the purposes
        described in this Privacy Policy, including providing services, maintaining records,
        resolving disputes, enforcing agreements, and meeting legal obligations.
      </p>

      <h2>9. Children's Privacy</h2>
      <p>
        Our website and marketing messaging program are not directed to children under 13, and we
        do not knowingly collect personal information from children under 13 through the website
        without appropriate authorization. Nail or other in-person services for minors may be
        subject to parent or guardian consent and applicable law.
      </p>

      <h2>10. Your Privacy Choices</h2>
      <p>
        Depending on applicable law, you may have rights regarding access, correction, deletion,
        or other handling of personal information. To make a request, contact Cloud Nails and
        Psychic using the contact information available on our website.
      </p>

      <h2>11. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy periodically. The updated version will be posted on our
        website with a revised effective date.
      </p>

      <h2>12. Contact</h2>
      <p>
        For privacy questions or requests, contact Cloud Nails and Psychic using the contact
        information published on our website.
      </p>

      <p className={styles.footNote}>
        Website publication copy &middot; Cloud Nails and Psychic
      </p>
    </LegalPage>
  );
}
