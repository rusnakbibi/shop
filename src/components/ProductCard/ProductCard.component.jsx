import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart, selectCartItems } from 'store';

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from './ProductCard.module.jsx';

import ButtonComponent, { BUTTON_TYPE_CLASSES } from '../Button';

const ProductCart = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}.png`} />
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <ButtonComponent
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </ButtonComponent>
    </ProductCartContainer>
  );
};

export default ProductCart;
