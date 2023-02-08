import { useContext } from 'react';

import { CartContext } from '../../context';

import styles from './ProductCard.module.scss';

import { ButtonComponent } from '..';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className={styles.productCardContainer}>
      <img src={imageUrl} alt={`${name}.png`} />
      <div className={styles.footer}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>${price}</span>
      </div>
      <ButtonComponent buttonType='inverted' onClick={addProductToCart}>
        Add to card
      </ButtonComponent>
    </div>
  );
};

export default ProductCard;
