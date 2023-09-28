import cloudsIcon from '../../assets/icons/4.png';
import clearSkyIcon from '../../assets/icons/3.png';

export function getWeatherIcon(id: string) {
  let icon;

  let date = new Date();
  let hours: string = String(date.getHours()).padStart(2, '0');

  console.log(id);
  console.log(new Date());
  switch (id) {
    case '02d':
      hours < '12' ? (icon = cloudsIcon) : (icon = clearSkyIcon);
      break;

    case '01n':
      icon = clearSkyIcon;
      break;

    default:
      break;
  }

  return icon;
}
