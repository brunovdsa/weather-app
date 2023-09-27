import {
  faDroplet,
  faLocationDot,
  faTemperatureThreeQuarters,
  faWind,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IconsProps {
  className: string;
}
export function LocationIcon(props: IconsProps) {
  return <FontAwesomeIcon icon={faLocationDot} className={props.className} />;
}

export function DropletIcon(props: IconsProps) {
  return <FontAwesomeIcon icon={faDroplet} className={props.className} />;
}

export function TempIcon(props: IconsProps) {
  return (
    <FontAwesomeIcon
      icon={faTemperatureThreeQuarters}
      className={props.className}
    />
  );
}

export function WindIcon(props: IconsProps) {
  return <FontAwesomeIcon icon={faWind} className={props.className} />;
}
