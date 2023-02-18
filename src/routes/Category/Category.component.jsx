import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store';

import { ProductCartComponent, SpinnerComponent } from '../../components';

import { CategoryContainer, CategoryTitle } from './Category.module.jsx';

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  console.log(isLoading);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <SpinnerComponent />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCartComponent key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
