import React from 'react';
import './DrawerToggleButton.scss';
const drawerToggleButton = props => (
    <div className = "toolbar-toggle-button">
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button__line"></div>
        <div className="toggle-button__line"></div>
        <div className="toggle-button__line"></div>
    </button>
    </div>
);

export default drawerToggleButton;