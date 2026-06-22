// Index 0 = Monday, 1 = Tuesday, ..., 6 = Sunday
// matches (new Date().getDay() + 6) % 7 mapping
export const HOURS = [
  { day: 'Monday', closed: true },
  { day: 'Tuesday', time: '10:00 am – 12:00 am' },
  { day: 'Wednesday', time: '12:00 pm – 2:00 am' },
  { day: 'Thursday', time: '12:00 pm – 2:00 am' },
  { day: 'Friday', time: '12:00 pm – 2:00 am' },
  { day: 'Saturday', time: '11:00 am – 12:00 am' },
  { day: 'Sunday', time: '12:00 pm – 2:00 am' },
];
