import { Routes, Route } from 'react-router-dom';

import { HomePage } from './routes';

const App = () => {
  return (
    <Routes>
      <Route path='/home' element={<HomePage />} />
    </Routes>
  );
};

export default App;
