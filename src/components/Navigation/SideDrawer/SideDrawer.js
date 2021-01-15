import React from 'react';
import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import BackDrop from '../../UI/BackDrop/BackDrop';
import Auxi from '../../../hoc/Auxi';


const sideDrawer = (props) => {
    return (
        <Auxi>
            <BackDrop show={props.sideShow} modalDisplay={props.sideDrawerShow} />
            <div className={[classes.SideDrawer,[props.sideShow ? classes.Open : classes.Close]].join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <NavigationItems />
                <div className={classes.btnClose} onClick={props.sideDrawerShow} />
            </div>
        </Auxi>
    );
}

export default sideDrawer;