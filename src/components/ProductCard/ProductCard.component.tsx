import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart, selectCartItems } from 'store';

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from './ProductCard.styles';

import { BUTTON_TYPE_CLASSES } from 'types/button.types';
import { ButtonComponent } from '..';
import { FC } from 'react';
import { ProductCardProps } from 'types/category.types.js';

const ProductCart: FC<ProductCardProps> = ({ product }) => {
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
