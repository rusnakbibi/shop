import { useContext } from 'react';

import { CartContext } from '../../context';

import { ButtonComponent, CartItemComponent } from '..';

import styles from './CartDropdown.module.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className={styles.cartDropdownContainer}>
      <div className={styles.cartItems}>
        {cartItems.map((item) => (
          <CartItemComponent key={item.id} cartItem={item} />
        ))}
      </div>
      <ButtonComponent>GO TO CHECKOUT</ButtonComponent>
    </div>
  );
};

export default CartDropdown;
