# Cloud Nails & Psychic — React

Vite + React migration of the Cloud Nails & Psychic single-page website.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  main.jsx              Entry point
  App.jsx               Root component — all state lives here
  index.css             Global design tokens, resets, Google Fonts import
  data/
    services.js         SVC array (14 services, nail + feet categories)
    hours.js            Weekly hours (Mon–Sun)
    contact.js          Address, phone, email
  utils/
    cleanName.js        Strips emoji from service names for card display
  components/
    Nav/                Fixed top nav with Book Now CTA
    Hero/               Full-viewport hero with Pexels background video
    PhotoWall/          2-col CSS grid with extracted nail art images
    InfoBar/            Thin address / phone / email strip
    Services/
      ServicesSection   3-col service card grid with Nail / Foot dividers
      ServiceCard       Individual card (emoji-stripped name, price, duration)
      ServiceDrawer     Bottom sheet — option picker + Add to Appointment
    HoursContact/       2-col hours table (today highlighted) + contact stack
    Footer/             Logo, nav links, Book Now
    BookingModal/       Light modal — name, phone, email, service select
    SignatureModal/     SMS consent + confirm/skip flow
    Toast/              Fixed pill notification, auto-dismisses in 3.2 s
public/
  images/               Nail art photos extracted from original HTML
```

## Key behaviour

- Every "Book" CTA opens `BookingModal`. No external links.
- Booking submit → closes modal → toast "Thanks! We'll reach out within 24 hours to confirm."
- Service card click → `ServiceDrawer` slides up from bottom.
- "Add to Appointment" → closes drawer → `SignatureModal` opens.
- Confirm or Skip → closes modal → toast "Appointment request received! We'll be in touch shortly."
- Today's hours row is highlighted in rose using `(new Date().getDay() + 6) % 7`.
 