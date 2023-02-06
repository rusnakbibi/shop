/* 
default

inverted

google sign in
*/

import styles from './Button.module.scss';

const BUTTON_TYPE_CLASSES = {
  google: 'googleSignIn',
  inverted: 'inverted',
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`${styles.buttonContainer} ${
        styles[BUTTON_TYPE_CLASSES[buttonType]]
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
