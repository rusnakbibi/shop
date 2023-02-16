import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { signOutUser } from '../../utils';
import { selectCurrentUser, selectIsCartOpen } from '../../store';

import { CartIconComponent, CartDropdownComponent } from '../../components';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from './Navigation.module.jsx';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIconComponent />
        </NavLinks>
        {isCartOpen && <CartDropdownComponent />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
