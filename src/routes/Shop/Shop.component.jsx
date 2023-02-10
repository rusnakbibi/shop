import { Routes, Route } from 'react-router-dom';

import { CategoriesPreviewPage, CategoryPage } from '..';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreviewPage />} />
      <Route path=':category' element={<CategoryPage />} />
    </Routes>
  );
};

export default Shop;
