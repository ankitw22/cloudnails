import { useState, useEffect } from 'react';
import { SVC } from '../../data/services';
import { HOURS } from '../../data/hours';
import { cleanName } from '../../utils/cleanName';
import styles from './AppointmentFlow.module.css';

// ─── helpers ─────────────────────────────────────────────────────────────────

function formatDur(dm) {
  if (dm < 60) return dm + ' min';
  const h = Math.floor(dm / 60);
  const m = dm % 60;
  return h + ' hr' + (m ? ' ' + m + ' min' : '');
}

const STAFF = [
  { id: 'any',      name: 'Any staff',  initials: '✦' },
  { id: 'ashley',   name: 'Ashley',     initials: 'As' },
  { id: 'layla',    name: 'Layla',      initials: 'La' },
  { id: 'michelle', name: 'Michelle',   initials: 'Mi' },
];

function getNext30Days() {
  const days = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (let i = 0; i < 30; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push(d);
  }
  return days;
}

const DAY_NAMES   = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTH_NAMES = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

function getSlotsForDay(date, staffId) {
  const jsDay  = date.getDay();
  const hourIdx = (jsDay + 6) % 7;
  if (HOURS[hourIdx].closed) return [];
  const base   = staffId === 'any' ? 6 : Math.floor(Math.random() * 3) + 1;
  const starts = [10, 11, 13, 14, 15, 16, 17];
  return starts.slice(0, Math.min(base, starts.length)).map((h) => {
    const ampm = h < 12 ? 'am' : 'pm';
    const h12  = h > 12 ? h - 12 : h;
    return `${h12}:00 ${ampm}`;
  });
}

// ─── Appointment summary (sidebar) ───────────────────────────────────────────

function AppointmentSummary({ items }) {
  const total = items.reduce((s, it) => {
    const n = parseFloat(it.opt.p.replace(/[^0-9.]/g, ''));
    return isNaN(n) ? s : s + n;
  }, 0);

  return (
    <div className={styles.summary}>
      <div className={styles.sumHdr}>Appointment summary</div>
      {items.map((it, i) => (
        <div key={i} className={styles.sumItem}>
          <div className={styles.sumItemLeft}>
            <div className={styles.sumItemName}>{cleanName(it.service.name)}</div>
            <div className={styles.sumItemSub}>{it.opt.p} · {formatDur(it.opt.dm)}</div>
          </div>
        </div>
      ))}
      {total > 0 && (
        <div className={styles.sumTotal}>
          <span>Total</span>
          <span>US${total.toFixed(2)}</span>
        </div>
      )}
    </div>
  );
}

// ─── Step 1: Add more services ────────────────────────────────────────────────

function AddMoreStep({ items, onAddService, onRemoveService }) {
  const nails = SVC.filter((s) => s.cat === 'nails');
  const feet  = SVC.filter((s) => s.cat === 'feet');
  const [tab, setTab] = useState('nails');
  const list     = tab === 'nails' ? nails : feet;
  const addedIds = new Set(items.map((it) => it.service.id));

  return (
    <div className={styles.stepWrap}>
      <div className={styles.stepContent}>
        <div className={styles.stepLeft}>
          <h2 className={styles.stepTitle}>Add more to your appointment?</h2>

          <div className={styles.tabs}>
            <button className={`${styles.tab} ${tab === 'nails' ? styles.tabActive : ''}`} onClick={() => setTab('nails')}>Nails</button>
            <button className={`${styles.tab} ${tab === 'feet'  ? styles.tabActive : ''}`} onClick={() => setTab('feet')}>Feet</button>
          </div>

          <div className={styles.catLabel}>{tab === 'nails' ? 'Nails' : 'Feet'}</div>

          <div className={styles.svcList}>
            {list.map((svc) => {
              const added = addedIds.has(svc.id);
              return (
                <div key={svc.id} className={styles.svcRow}>
                  <div className={styles.svcRowInfo}>
                    <div className={styles.svcRowName}>{cleanName(svc.name)}</div>
                    {svc.desc && <div className={styles.svcRowDesc}>{svc.desc}</div>}
                    <div className={styles.svcRowMeta}>{svc.price === 'Varies' ? 'Price varies' : svc.price} · {svc.dur}</div>
                    {added && <div className={styles.addedBadge}>✓ Added</div>}
                  </div>
                  <button
                    className={`${styles.addBtn} ${added ? styles.addBtnAdded : ''}`}
                    onClick={() => added ? onRemoveService(svc.id) : onAddService(svc)}
                    aria-label={added ? `Remove ${cleanName(svc.name)}` : `Add ${cleanName(svc.name)}`}
                  >{added ? '−' : '+'}</button>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.stepRight}>
          <AppointmentSummary items={items} />
        </div>
      </div>
    </div>
  );
}

// ─── Step 2: Staff selection ──────────────────────────────────────────────────

function StaffStep({ items, selectedStaff, onSelect }) {
  return (
    <div className={styles.stepWrap}>
      <div className={styles.stepContent}>
        <div className={styles.stepLeft}>
          <h2 className={styles.stepTitle}>Select staff</h2>
          <div className={styles.staffList}>
            {STAFF.map((s) => (
              <div
                key={s.id}
                className={`${styles.staffRow} ${selectedStaff?.id === s.id ? styles.staffRowSel : ''}`}
                onClick={() => onSelect(s)}
                role="radio"
                aria-checked={selectedStaff?.id === s.id}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onSelect(s)}
              >
                <div className={`${styles.staffAvatar} ${s.id === 'any' ? styles.staffAvatarAny : ''}`}>{s.initials}</div>
                <span className={styles.staffName}>{s.name}</span>
                <div className={`${styles.staffRadio} ${selectedStaff?.id === s.id ? styles.staffRadioSel : ''}`} />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.stepRight}>
          <AppointmentSummary items={items} />
        </div>
      </div>
    </div>
  );
}

// ─── Step 3: Availability ─────────────────────────────────────────────────────

function AvailabilityStep({ items, selectedStaff, selectedDate, selectedSlot, onDateClick, onSlotClick }) {
  const days = getNext30Days();
  const [weekStart, setWeekStart] = useState(0);
  const weekDays    = days.slice(weekStart, weekStart + 7);
  const slots       = selectedDate ? getSlotsForDay(selectedDate, selectedStaff?.id || 'any') : [];
  const selectedMonth = selectedDate || weekDays[0];

  return (
    <div className={styles.stepWrap}>
      <div className={styles.stepContent}>
        <div className={styles.stepLeft}>
          <h2 className={styles.stepTitle}>
            {MONTH_NAMES[selectedMonth.getMonth()]} {selectedMonth.getFullYear()}
          </h2>
          <p className={styles.tzNote}>Times are shown in GMT-7.</p>

          <div className={styles.weekStrip}>
            <button className={styles.weekNav} onClick={() => setWeekStart((w) => Math.max(0, w - 7))} disabled={weekStart === 0} aria-label="Previous week">←</button>
            {weekDays.map((d, i) => {
              const jsDay   = d.getDay();
              const isClosed = HOURS[(jsDay + 6) % 7].closed;
              const isSel   = selectedDate && d.toDateString() === selectedDate.toDateString();
              return (
                <button
                  key={i}
                  className={`${styles.dayBtn} ${isSel ? styles.dayBtnSel : ''} ${isClosed ? styles.dayBtnClosed : ''}`}
                  onClick={() => !isClosed && onDateClick(d)}
                  disabled={isClosed}
                >
                  <span className={styles.dayName}>{DAY_NAMES[jsDay]}</span>
                  <span className={styles.dayNum}>{d.getDate()}</span>
                </button>
              );
            })}
            <button className={styles.weekNav} onClick={() => setWeekStart((w) => Math.min(days.length - 7, w + 7))} disabled={weekStart + 7 >= days.length} aria-label="Next week">→</button>
          </div>

          {selectedDate && (
            <div className={styles.slotsWrap}>
              <div className={styles.slotsDateLabel}>
                {selectedDate.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
              </div>
              {slots.length === 0 ? (
                <div className={styles.noSlots}>
                  <p>No availability on this day.</p>
                </div>
              ) : (
                <div className={styles.slotGrid}>
                  {slots.map((slot) => (
                    <button
                      key={slot}
                      className={`${styles.slotBtn} ${selectedSlot === slot ? styles.slotBtnSel : ''}`}
                      onClick={() => onSlotClick(slot)}
                    >{slot}</button>
                  ))}
                </div>
              )}
            </div>
          )}
          {!selectedDate && <p className={styles.pickPrompt}>Select a date to see available times.</p>}
        </div>

        <div className={styles.stepRight}>
          <AppointmentSummary items={items} />
        </div>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function AppointmentFlow({ isOpen, initialService, initialOptIdx, onClose, onComplete }) {
  const [step, setStep]               = useState(0); // 0=services, 1=staff, 2=availability
  const [items, setItems]             = useState([]);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [selectedDate, setSelectedDate]   = useState(null);
  const [selectedSlot, setSelectedSlot]   = useState(null);

  useEffect(() => {
    if (isOpen && initialService) {
      setStep(0);
      setItems([{ service: initialService, opt: initialService.opts[initialOptIdx ?? 0] }]);
      setSelectedStaff(null);
      setSelectedDate(null);
      setSelectedSlot(null);
    }
  }, [isOpen, initialService, initialOptIdx]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const addService    = (svc) => setItems((prev) => [...prev, { service: svc, opt: svc.opts[0] }]);
  const removeService = (id)  => setItems((prev) => prev.filter((it) => it.service.id !== id));

  const handleDateClick = (date) => { setSelectedDate(date); setSelectedSlot(null); };
  const handleSlotClick = (slot) => setSelectedSlot(slot);

  // Footer CTA config per step
  const footerConfig = [
    { label: 'Next →', disabled: false,            action: () => setStep(1) },
    { label: 'Next →', disabled: !selectedStaff,   action: () => setStep(2) },
    { label: 'Book Appointment →', disabled: !selectedSlot, action: () => onComplete({ items, staff: selectedStaff, date: selectedDate, slot: selectedSlot }) },
  ];
  const footer = footerConfig[step];

  const STEP_LABELS = ['Services', 'Staff', 'Availability'];

  return (
    <>
      {/* Backdrop */}
      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ''}`}
        onClick={onClose}
      />

      {/* Bottom sheet */}
      <div
        className={`${styles.sheet} ${isOpen ? styles.sheetOpen : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Book appointment"
      >
        <div className={styles.pill} />

        {/* Header */}
        <div className={styles.sheetHdr}>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" width="12" height="12">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className={styles.stepper}>
            {STEP_LABELS.map((label, i) => (
              <div key={i} className={styles.stepperItem}>
                <div className={`${styles.stepperDot} ${i < step ? styles.stepperDotDone : ''} ${i === step ? styles.stepperDotActive : ''}`}>
                  {i < step
                    ? <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" width="9" height="9"><path d="M5 13l4 4L19 7" /></svg>
                    : i + 1}
                </div>
                <span className={`${styles.stepperLabel} ${i === step ? styles.stepperLabelActive : ''}`}>{label}</span>
                {i < STEP_LABELS.length - 1 && <div className={`${styles.stepperLine} ${i < step ? styles.stepperLineDone : ''}`} />}
              </div>
            ))}
          </div>

          <div className={styles.hdrSpacer} />
        </div>

        {/* Scrollable body */}
        <div className={styles.sheetBody}>
          {step === 0 && <AddMoreStep items={items} onAddService={addService} onRemoveService={removeService} />}
          {step === 1 && <StaffStep items={items} selectedStaff={selectedStaff} onSelect={setSelectedStaff} />}
          {step === 2 && (
            <AvailabilityStep
              items={items}
              selectedStaff={selectedStaff}
              selectedDate={selectedDate}
              selectedSlot={selectedSlot}
              onDateClick={handleDateClick}
              onSlotClick={handleSlotClick}
            />
          )}
        </div>

        {/* Sticky footer */}
        <div className={styles.sheetFoot}>
          <button
            className="btn btn-rose"
            style={{ width: '100%', padding: '13px', borderRadius: '10px' }}
            onClick={footer.action}
            disabled={footer.disabled}
          >
            {footer.label}
          </button>
        </div>
      </div>
    </>
  );
}
