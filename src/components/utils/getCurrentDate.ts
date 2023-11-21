export function getCurrentDate(timestamp: number) {
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const monthName = [
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

  let newDate: Date = new Date(timestamp);
  let day = weekday[newDate.getDay()];
  let date: number = newDate.getDate();
  let month: string = monthName[newDate.getMonth() + 1];
  let hours: string = String(newDate.getHours()).padStart(2, '0');
  let minutes: string = String(newDate.getMinutes()).padStart(2, '0');

  return `${day}, ${date} ${month} ${hours}:${minutes}`;
}
