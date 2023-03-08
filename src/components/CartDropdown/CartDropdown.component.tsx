import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems, selectIsCartOpen, setIsCartOpen } from 'store';
import { CartItem } from 'types/cart.types';
import { ButtonComponent, CartItemComponent } from '..';

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './CartDropdown.style';

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  console.log(cartItems);
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
          cartItems.map((item: CartItem) => (
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
