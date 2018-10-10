import React, {Component} from 'react';

import './MinistrySubMenu.scss';
class MinistrySubMenu extends Component {
    render() {
      return (
        <ul className="nav__submenu">
          <li className="nav__submenu-item ">
            <a  href="/ministry/zone1">ZONE 1</a>
          </li>
          <li className="nav__submenu-item ">
            <a href="/ministry/zone2">ZONE 2</a>
          </li>
          <li className="nav__submenu-item ">
            <a href="/ministry/zone3">ZONE 3</a>
          </li>
          <li className="nav__submenu-item ">
            <a href="/ministry/zone4">ZONE 4</a>
          </li>
        </ul>
      )
    }
  }

  export default MinistrySubMenu;