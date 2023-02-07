import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../context';
import { signOutUser } from '../../utils';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
          {currentUser ? (
            <span className={styles.navLink} onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className={styles.navLink} to='/auth'>
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
