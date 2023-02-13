import { useContext } from 'react';

import { CartContext } from '../../context';

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from './ProductCard.module.jsx';

import ButtonComponent, { BUTTON_TYPE_CLASSES } from '../Button';

const ProductCart = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

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
