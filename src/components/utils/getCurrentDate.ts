import moment from 'moment';

export function getCurrentDate(timestamp: number, timezone: number) {
  var unixToMilliseconds = timestamp * 1000;
  var timeZoneToMinutes = timezone / 60;

  var formatedData = moment(unixToMilliseconds)
    .utcOffset(timeZoneToMinutes)
    .format('dddd, MMM Do, h:mm A');

  console.log(
    timezone + ' timezone',
    timeZoneToMinutes + 'timezone to minutes',
    timestamp + ' timestamp'
  );

  return formatedData;
}
