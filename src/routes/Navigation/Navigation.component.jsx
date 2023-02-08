import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { UserContext, CartContext } from '../../context';
import { signOutUser } from '../../utils';

import { CartIconComponent, CartDropdownComponent } from '../../components';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, cartCount } = useContext(CartContext);

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
          <CartIconComponent />
        </div>
        {isCartOpen && <CartDropdownComponent />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
