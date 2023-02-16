import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems, selectIsCartOpen, setIsCartOpen } from '../../store';

import { ButtonComponent, CartItemComponent } from '..';

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './CartDropdown.module.jsx';

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
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
