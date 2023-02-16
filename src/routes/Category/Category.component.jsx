import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCategoriesMap } from '../../store';

import { ProductCartComponent } from '../../components';

import { CategoryContainer, CategoryTitle } from './Category.module.jsx';

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCartComponent key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
