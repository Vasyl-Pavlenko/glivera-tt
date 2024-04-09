import { Link } from 'react-router-dom';
import { IconLeftChevron } from './index';

export const SideBarNavItem = ({ link, icon: Icon, title, pathname }) => (
  <li className={`sidebar__nav-item ${pathname === link ? 'active' : ''}`}>
    <Link className="sidebar__nav-link" to={link}>
      {Icon && <Icon />}

      <span className="sidebar__nav-link-title">{title}</span>

      {title !== 'Dashboard' && <IconLeftChevron />}
    </Link>
  </li>
);
