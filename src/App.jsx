import { Routes, Route } from 'react-router-dom';

import {
  HomePage,
  NavigationComponent,
  AuthenticationComponent,
} from './routes';

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavigationComponent />}>
        <Route index element={<HomePage />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<AuthenticationComponent />} />
      </Route>
    </Routes>
  );
};

export default App;
