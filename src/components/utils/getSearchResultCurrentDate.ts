import moment from 'moment';

export function getSearchResultCurrentDate(
  unix_timestamp: number,
  timezone: number
) {
  var unixToMilliseconds = unix_timestamp * 1000;

  var DATA = moment(unixToMilliseconds)
    .utcOffset(timezone)
    .format('ddd MMM D Y hh:mm:ss A ');

  console.log(DATA);

  // var date = new Date(T + 32400);
  // date.toString();

  // // Hours part from the timestamp
  // var hours = date.getHours();

  // // Minutes part from the timestamp
  // var minutes = '0' + date.getMinutes();

  // // Seconds part from the timestamp
  // var seconds = '0' + date.getSeconds();

  // // Will display time in 10:30:23 format
  // var formattedTime =
  //   hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

  // console.log(date, ' date');
}
