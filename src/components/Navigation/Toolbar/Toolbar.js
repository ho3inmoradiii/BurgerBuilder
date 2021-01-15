import React from 'react';
import classes from './Toolbar.css';
import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => {
    return (
      <div className={classes.Toolbar}>
          <div onClick={props.sideDrawerShow} style={{cursor:"pointer"}} className={classes.onlyMob}>
              <div className={classes.hamburgerMenu}></div>
              <div className={classes.hamburgerMenu}></div>
              <div className={classes.hamburgerMenu}></div>
          </div>
          <div className={classes.Logo}><Logo /></div>
          <nav className={classes.DesktopOnly}>
              <NavigationItems />
          </nav>
      </div>
    );
}

export default toolbar;