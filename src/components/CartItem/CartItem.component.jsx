import styles from './CartItem.module.scss';

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;

  return (
    <div className={styles.cartItemContainer}>
      <img src={imageUrl} alt={`${name}.png`} />
      <div className={styles.itemDetails}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
