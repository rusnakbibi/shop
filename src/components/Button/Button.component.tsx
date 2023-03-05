import { ButtonData } from 'types/button.types';

import {
  BaseButton,
  GoogleSignButton,
  InvertedButton,
  ButtonSpinner,
} from './Button.style';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'googleSignIn',
  inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({
  children,
  buttonType,
  isLoading,
  disabled,
  ...otherProps
}: ButtonData) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={disabled} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
