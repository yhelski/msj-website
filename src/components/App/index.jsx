import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import Home from '../../components/Home/Home';
import Articles from '../Article/Articles';
import NavMenu from '../Navigation/NavMenu';
import DrawerToggleButton from '../Drawer/DrawerToggleButton';
import SideDrawer from '../Drawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Zone1 from '../Pages/Zone1';
import Zone2 from '../Pages/Zone2';
import Zone3 from '../Pages/Zone3';
import Zone4 from '../Pages/Zone4';
import Events from '../Pages/Events';
class App extends React.Component {

  state = {
    sideDrawerOpen:false
  };

  drawerToggleClickHandler = () =>{
    this.setState(
                  (prevState) => {
                      return  {sideDrawerOpen: !this.state.sideDrawerOpen}
                    }
                );

  };

  backdropClickHandler = () =>{

    this.setState({sideDrawerOpen:false});
  };
  render(){
    let backdrop;

    if(this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }
    return (
    <div className="container background">
      <header className="header">
      <div className="toggle-container">
			      <DrawerToggleButton click={this.drawerToggleClickHandler}/>
		  </div>
      <SideDrawer show={this.state.sideDrawerOpen}/>
      {backdrop}
        <div className="header-container">
        
        <div className="header-logo logo-container"/>
        <h1>MSJ Region</h1>
        <NavMenu className="nav-main"/>
        <div className="main-body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/articles" component={Articles} />
          <Route path="/ministry/zone1" component={Zone1}/>
          <Route path="/ministry/zone2" component={Zone2}/>
          <Route path="/ministry/zone3" component={Zone3}/>
          <Route path="/ministry/zone4" component={Zone4}/>
          <Route path="/events" component={Events}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>

          <Route component={Error}/>
        </Switch>
      </div>
        </div>
        
      </header>
      

    </div>
  )
  }
}

export default App;