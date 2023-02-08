import { useContext } from 'react';

import { CartContext } from '../../context';

import { CheckoutItemComponent } from '../../components';

import styles from './Checkout.module.scss';

const Checkout = () => {
  const { cartItems, cartTotalPrice } = useContext(CartContext);
  return (
    <div className={styles.checkoutContainer}>
      <div className={styles.checkoutHeader}>
        <div className={styles.headerBlock}>
          <span>Product</span>
        </div>
        <div className={styles.headerBlock}>
          <span>Description</span>
        </div>
        <div className={styles.headerBlock}>
          <span>Quantity</span>
        </div>
        <div className={styles.headerBlock}>
          <span>Price</span>
        </div>
        <div className={styles.headerBlock}>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItemComponent key={cartItem.id} cartItem={cartItem} />;
      })}
      <span className={styles.total}>Total: ${cartTotalPrice}</span>
    </div>
  );
};

export default Checkout;
