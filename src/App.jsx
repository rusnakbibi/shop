import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils';

import { setCurrentUser } from './store';

import {
  HomePage,
  NavigationComponent,
  AuthenticationPage,
  ShopPage,
  CheckoutPage,
} from './routes';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Create an unsubscribe function from the onAuthStateChangedListener callback
    const unsubscribeFromAuthStateChangeListener = onAuthStateChangedListener(
      (user) => {
        if (user) {
          createUserDocumentFromAuth(user);
        }
        dispatch(setCurrentUser(user));
      }
    );

    // Unsubscribe every time the component unmounts
    return () => {
      unsubscribeFromAuthStateChangeListener();
    };
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<NavigationComponent />}>
        <Route index element={<HomePage />} />
        <Route path='shop/*' element={<ShopPage />} />
        <Route path='auth' element={<AuthenticationPage />} />
        <Route path='checkout' element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
};

export default App;
