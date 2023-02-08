import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../context';

import { ButtonComponent, CartItemComponent } from '..';

import styles from './CartDropdown.module.scss';

const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
    toggleIsCartOpen();
  };

  return (
    <div className={styles.cartDropdownContainer}>
      <div className={styles.cartItems}>
        {cartItems.map((item) => (
          <CartItemComponent key={item.id} cartItem={item} />
        ))}
      </div>
      <ButtonComponent onClick={goToCheckoutHandler}>
        GO TO CHECKOUT
      </ButtonComponent>
    </div>
  );
};

export default CartDropdown;
