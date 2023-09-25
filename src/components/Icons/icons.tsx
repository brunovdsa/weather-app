import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IconsProps {
  className: string;
}
export function LocationIcon(props: IconsProps) {
  return <FontAwesomeIcon icon={faLocationDot} className={props.className} />;
}
