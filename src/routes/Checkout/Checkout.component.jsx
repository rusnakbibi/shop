import { useSelector } from 'react-redux';

import { selectCartItems, selectCartTotalPrice } from '../../store';

import { CheckoutItemComponent } from '../../components';

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './Checkout.module.jsx';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotalPrice = useSelector(selectCartTotalPrice);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => {
        return <CheckoutItemComponent key={cartItem.id} cartItem={cartItem} />;
      })}
      <Total>Total: ${cartTotalPrice}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
