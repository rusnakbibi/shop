import { ButtonComponent } from '..';

import styles from './CartDropdown.module.scss';

const CartDropdown = () => {
  return (
    <div className={styles.cartDropdownContainer}>
      <div className={styles.cartItems}></div>
      <ButtonComponent>GO TO CHECKOUT</ButtonComponent>
    </div>
  );
};

export default CartDropdown;
