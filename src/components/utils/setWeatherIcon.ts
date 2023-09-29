import amClearSky from '../../assets/icons/amClearSky.png';
import pmClearSky from '../../assets/icons/pmClearSky.png';

import amFewClouds from '../../assets/icons/amFewClouds.png';
import pmFewClouds from '../../assets/icons/pmFewClouds.png';

import scatteredClouds from '../../assets/icons/am_pmScatteredClouds.png';

import amBrokenClouds from '../../assets/icons/amBrokenClouds.png';
import pmBrokenClouds from '../../assets/icons/pmBrokenClouds.png';

import showerRain from '../../assets/icons/am_pmShowerRain.png';

import amRain from '../../assets/icons/amRain.png';
import pmRain from '../../assets/icons/amRain.png';

import thunderstorm from '../../assets/icons/am_pmThunderStom.png';

export function getWeatherIcon(id: string) {
  let icon;

  switch (id) {
    //Clear sky
    case '01d':
      icon = amClearSky;
      break;
    case '01n':
      icon = pmClearSky;
      break;

    //Few clouds
    case '02d':
      icon = amFewClouds;
      break;
    case '02n':
      icon = pmFewClouds;
      break;

    //Scattered clouds
    case '03d':
      icon = scatteredClouds;
      break;
    case '03n':
      icon = scatteredClouds;
      break;

    //Broken clouds
    case '04d':
      icon = amBrokenClouds;
      break;
    case '04n':
      icon = pmBrokenClouds;
      break;

    //Shower rain
    case '09d':
      icon = showerRain;
      break;
    case '09n':
      icon = showerRain;
      break;

    //Rain
    case '10d':
      icon = amRain;
      break;
    case '10n':
      icon = pmRain;
      break;

    //Thunderstorm
    case '11d':
      icon = thunderstorm;
      break;
    case '11n':
      icon = thunderstorm;
      break;

    //Default
    default:
      icon = id;
      break;
  }
  return icon;
}
