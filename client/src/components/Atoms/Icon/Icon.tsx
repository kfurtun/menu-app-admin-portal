import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBoxArchive,
  faDashboard,
  faClipboardList,
  faArrowUp,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import pxToRem from 'theme/pxToRem';

interface Props {
  name: string;
  fontSize?: number;
  width?: number;
}

function Icon(props: Props): JSX.Element {
  const { name, fontSize, width } = props;

  const iconStyle = {
    fontSize: pxToRem(fontSize || 16),
    width: pxToRem(width || 16),
  };

  switch (name) {
    case 'menus': {
      return <FontAwesomeIcon icon={faBoxArchive} style={iconStyle} />;
    }
    case 'dashboard': {
      return <FontAwesomeIcon icon={faDashboard} style={iconStyle} />;
    }
    case 'orders': {
      return <FontAwesomeIcon icon={faClipboardList} style={iconStyle} />;
    }
    case 'upArrow': {
      return <FontAwesomeIcon icon={faArrowUp} style={iconStyle} />;
    }
    case 'downArrow': {
      return <FontAwesomeIcon icon={faArrowDown} style={iconStyle} />;
    }
    default: {
      return <div></div>;
    }
  }
}

export default Icon;
