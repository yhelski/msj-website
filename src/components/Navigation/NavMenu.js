import React, {Component} from 'react';

import MinistrySubMenu from './MinistrySubMenu'
import './NavMenu.scss';
import CSSTransitionGroup from 'react-addons-css-transition-group';
class NavMenu extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showMinistryMenu: false
      };
    }
    
    handleHover = () => {
      
      this.setState({ showMinistryMenu: true });
      console.log(this.state);
    };
    
    handleLeave = () => {
      this.setState({ showMinistryMenu: false });
      console.log(this.state);
    };
    
    render() {
      return (
          <div className="nav">
          <ul className="nav__menu">
            <li className="nav__menu-item">
              <a href="/">Home</a>
            </li>
            <li
              className="nav__menu-item"
              onMouseLeave={this.handleLeave}
            >
              <a className="ministry-a"onMouseEnter={this.handleHover}>
                Ministries</a>
                <div className="submenu-container">
              <CSSTransitionGroup
                transitionName="slide"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
              >
                { this.state.showMinistryMenu && <MinistrySubMenu /> }
              </CSSTransitionGroup> 
               </div>
              
            </li>
            <li className="nav__menu-item">
              <a href="/events">Events</a>
            </li>
            <li className="nav__menu-item">
              <a href="/about">About Us</a>
            </li>
            <li className="nav__menu-item">
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
          </div>
      )
    }
  }

  export default NavMenu;