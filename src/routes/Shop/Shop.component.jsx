import { useContext } from 'react';

import { ProductsContext } from '../../context';

import { ProductCardComponent } from '../../components';

import styles from './Shop.module.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className={styles.productsContainer}>
      {products.map((product) => (
        <ProductCardComponent key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
