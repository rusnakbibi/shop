import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className={styles.navigation}>
        <Link className={styles.logoContainer} to='/'>
          <CrwnLogo className={styles.logo} />
        </Link>
        <div className={styles.navLinksContainer}>
          <Link className={styles.navLink} to='/shop'>
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
