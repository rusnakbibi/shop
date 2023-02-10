import { Routes, Route } from 'react-router-dom';

import {
  HomePage,
  NavigationComponent,
  AuthenticationPage,
  ShopPage,
  CheckoutPage,
} from './routes';

const App = () => {
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
