import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Layout.module.css';
import fadeLogoStyles from '../../animationStyles/logo.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <CSSTransition
          in={true}
          appear={true}
          classNames={fadeLogoStyles}
          timeout={500}
          unmountOnExit
        >
          <div className={styles.boxLogo}>
            <h1 className={styles.titleLogo}>Phonebook</h1>
          </div>
        </CSSTransition>
      </header>

      <main>{children}</main>
    </>
  );
};
export default Layout;
