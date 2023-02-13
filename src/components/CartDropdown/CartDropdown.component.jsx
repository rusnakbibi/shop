import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../context';

import { ButtonComponent, CartItemComponent } from '..';

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './CartDropdown.module.jsx';

const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
    toggleIsCartOpen();
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => (
            <CartItemComponent key={item.id} cartItem={item} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <ButtonComponent onClick={goToCheckoutHandler}>
        GO TO CHECKOUT
      </ButtonComponent>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
