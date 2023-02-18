import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchCategoriesStartAsync } from '../../store';

import { CategoriesPreviewPage, CategoryPage } from '..';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStartAsync());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreviewPage />} />
      <Route path=':category' element={<CategoryPage />} />
    </Routes>
  );
};

export default Shop;
