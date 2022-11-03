import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBoxArchive,
  faDashboard,
  faClipboardList,
} from '@fortawesome/free-solid-svg-icons';
import pxToRem from 'theme/pxToRem';

interface Props {
  name: string;
}

function Icon(props: Props): JSX.Element {
  const { name } = props;

  const iconStyle = { fontSize: pxToRem(16), width: pxToRem(16) };

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
    default: {
      return <div></div>;
    }
  }
}

export default Icon;
