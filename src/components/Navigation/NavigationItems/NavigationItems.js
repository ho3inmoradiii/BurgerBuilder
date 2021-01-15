import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = (props) => {
    return (
      <div>
          <ul className={classes.NavigationItems}>
              <NavigationItem link="/" active>سفارش برگر</NavigationItem>
              <NavigationItem link="/">صفحه پرداخت</NavigationItem>
          </ul>
      </div>
    );
}

export default navigationItems;