import React from 'react';
import './SideDrawer.scss';
import NavMenu from '../Navigation/NavMenu'
const sideDrawer = props => {
    let drawerClasses = 'side-drawer';

    if(props.show){
        drawerClasses = 'side-drawer open';
    }
    return (

    <nav className={drawerClasses}>
        <NavMenu/>
    </nav>

)};

export default sideDrawer;