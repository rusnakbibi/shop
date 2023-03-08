import { useDispatch, useSelector } from 'react-redux';

import { selectCartCount, selectIsCartOpen, setIsCartOpen } from 'store';

import { CartIconContainer, ItemCount, ShoppingIcon } from './CartIcon.styles';

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
