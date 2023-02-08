import { useContext } from 'react';

import { CartContext } from '../../context';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import styles from './CartIcon.module.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className={styles.cartIconContainer} onClick={toggleIsCartOpen}>
      <ShoppingIcon className={styles.shoppingIcon} />
      <span className={styles.itemCount}>0</span>
    </div>
  );
};

export default CartIcon;
