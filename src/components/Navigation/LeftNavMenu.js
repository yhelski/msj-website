import React, {Component} from 'react';

import './LeftNavMenu.scss';
class LeftNavMenu extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showMinistryMenu: false
      };
    }
    
    
    render() {
      return (
          <div className="left-nav-menu">
              <ul>
                  <li><a href="/">This is link</a></li>

              </ul>

          </div>
      )
    }
  }

  export default LeftNavMenu;