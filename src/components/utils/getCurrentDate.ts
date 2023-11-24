import moment from 'moment';

export function getCurrentDate(timestamp: number, timezone: number) {
  var unixToMilliseconds = timestamp * 1000;
  var timeZoneToMinutes = timezone / 60;

  var formatedData = moment(unixToMilliseconds)
    .utcOffset(timeZoneToMinutes)
    .format('dddd, MMM Do, h:mm A');

  return formatedData;
}
