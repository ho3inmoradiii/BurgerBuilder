import React from 'react';
import Auxi from "../../hoc/Auxi";
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
  <Auxi>
      <Toolbar sideDrawerShow={props.sideDrawerShow} />
      <SideDrawer sideShow={props.sideShow} sideDrawerShow={props.sideDrawerShow} />
      <main className={styles.Content}>
          {props.children}
      </main>
  </Auxi>
);

export default layout;