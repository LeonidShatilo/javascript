const WEEKDAY_NAMES = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function showDate() {
  const DATE = document.querySelector('.date');
  const TODAY = new Date();
  const WEEKDAY = TODAY.getDay();
  const DAY_DATE = TODAY.getDate();
  const MONTH = TODAY.getMonth();
  const YEAR = TODAY.getFullYear();

  DATE.textContent = `For today, ${WEEKDAY_NAMES[WEEKDAY]}, 
  ${MONTH_NAMES[MONTH]} ${DAY_DATE}, ${YEAR}`;
}
