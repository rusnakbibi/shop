import { useContext } from 'react';

import { CartContext } from '../../context';

import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from './CartIcon.module.jsx';

const CartIcon = ({ quantity }) => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
