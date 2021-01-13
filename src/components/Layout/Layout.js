import React from 'react';
import Auxi from "../../hoc/Auxi";
import styles from './Layout.module.css';

const layout = (props) => (
  <Auxi>
      <div>منوی اصلی، منوی کناری</div>
      <main className={styles.Content}>
          {props.children}
      </main>
  </Auxi>
);

export default layout;