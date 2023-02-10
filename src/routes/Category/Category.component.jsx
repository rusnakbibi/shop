import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import { CategoriesContext } from '../../context';
import { ProductCardComponent } from '../../components';

import styles from './Category.module.scss';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className={styles.categoryTitle}>{category.toUpperCase()}</h2>
      <div className={styles.categoryContainer}>
        {products &&
          products.map((product) => (
            <ProductCardComponent key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
