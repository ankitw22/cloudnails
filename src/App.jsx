import { useState, useCallback } from 'react';
import './index.css';

import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import PhotoWall from './components/PhotoWall/PhotoWall';
import InfoBar from './components/InfoBar/InfoBar';
import ServicesSection from './components/Services/ServicesSection';
import ServiceDrawer from './components/Services/ServiceDrawer';
import AppointmentFlow from './components/AppointmentFlow/AppointmentFlow';
import HoursContact from './components/HoursContact/HoursContact';
import Footer from './components/Footer/Footer';
import BookingModal from './components/BookingModal/BookingModal';
import SignatureModal from './components/SignatureModal/SignatureModal';
import Toast from './components/Toast/Toast';

function App() {
  // Drawer state
  const [selectedService, setSelectedService] = useState(null);
  const [selectedOptIdx, setSelectedOptIdx] = useState(0);

  // Multi-step appointment flow
  const [isFlowOpen, setIsFlowOpen] = useState(false);
  const [flowService, setFlowService] = useState(null);
  const [flowOptIdx, setFlowOptIdx] = useState(0);

  // Signup modal (last step)
  const [isSigModalOpen, setIsSigModalOpen] = useState(false);
  const [bookingData, setBookingData] = useState(null);

  // Standalone booking modal (from Nav/Hero/Footer)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const [toast, setToast] = useState(null);

  const showToast = useCallback((msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3200);
  }, []);

  // ── Standalone booking modal ──────────────────────────────────────────────
  const openBookingModal = useCallback(() => setIsBookingModalOpen(true), []);
  const closeBookingModal = useCallback(() => setIsBookingModalOpen(false), []);
  const handleBookingSubmit = useCallback(() => {
    setIsBookingModalOpen(false);
    showToast("Thanks! We'll reach out within 24 hours to confirm.");
  }, [showToast]);

  // ── Service drawer ────────────────────────────────────────────────────────
  const openServiceDrawer = useCallback((service) => {
    setSelectedService(service);
    setSelectedOptIdx(0);
  }, []);

  const closeServiceDrawer = useCallback(() => {
    setSelectedService(null);
  }, []);

  // When user clicks "Add to Appointment" in the drawer → open the flow
  const handleAddToAppointment = useCallback((optIdx) => {
    const svc = selectedService;
    const idx = optIdx ?? selectedOptIdx;
    closeServiceDrawer();
    setFlowService(svc);
    setFlowOptIdx(idx);
    setIsFlowOpen(true);
  }, [selectedService, selectedOptIdx, closeServiceDrawer]);

  // ── Appointment flow ──────────────────────────────────────────────────────
  const closeFlow = useCallback(() => {
    setIsFlowOpen(false);
  }, []);

  // When user clicks "Book Appointment" at the end of the flow → show signup
  const handleFlowComplete = useCallback((data) => {
    setBookingData(data);
    setIsFlowOpen(false);
    setIsSigModalOpen(true);
  }, []);

  // ── Signature / signup modal ──────────────────────────────────────────────
  const handleSigSubmit = useCallback(() => {
    setIsSigModalOpen(false);
    setBookingData(null);
    showToast("Appointment request received! We'll be in touch shortly.");
  }, [showToast]);

  const handleSigSkip = useCallback(() => {
    setIsSigModalOpen(false);
    setBookingData(null);
    showToast("Appointment request received! We'll be in touch shortly.");
  }, [showToast]);

  return (
    <>
      <Nav onBookNow={openBookingModal} />

      <main>
        <Hero onBookNow={openBookingModal} />
        <PhotoWall />
        <InfoBar />
        <ServicesSection onOpenService={openServiceDrawer} />
        <HoursContact onBookNow={openBookingModal} />
      </main>

      <Footer onBookNow={openBookingModal} />

      {/* Step 1: Service option drawer */}
      <ServiceDrawer
        service={selectedService}
        onClose={closeServiceDrawer}
        onAddToAppointment={handleAddToAppointment}
      />

      {/* Steps 2–4: Add more → Staff → Availability */}
      <AppointmentFlow
        isOpen={isFlowOpen}
        initialService={flowService}
        initialOptIdx={flowOptIdx}
        onClose={closeFlow}
        onComplete={handleFlowComplete}
      />

      {/* Step 5: Signup/confirm */}
      <SignatureModal
        isOpen={isSigModalOpen}
        service={bookingData}
        onSubmit={handleSigSubmit}
        onSkip={handleSigSkip}
      />

      {/* Standalone booking modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={closeBookingModal}
        onSubmit={handleBookingSubmit}
      />

      <Toast message={toast} />
    </>
  );
}

export default App;
