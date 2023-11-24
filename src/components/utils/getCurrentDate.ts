import moment from 'moment';

export function getCurrentDate(timestamp: number, timezone: number) {
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

  var unixToMilliseconds = timestamp * 1000;
  var timeZoneToMinutes = timezone / 60;

  var formatedData = moment(unixToMilliseconds)
    .utcOffset(timeZoneToMinutes)
    .format('ddd MMM D Y hh:mm:ss A ');

  let newDate: Date = new Date(timestamp);
  let day = weekday[newDate.getDay()];
  let date: number = newDate.getDate();
  let month: string = monthName[newDate.getMonth() + 1];
  let hours: string = String(newDate.getHours()).padStart(2, '0');
  let minutes: string = String(newDate.getMinutes()).padStart(2, '0');

  return `${day}, ${date} ${month} ${hours}:${minutes}`;
}
