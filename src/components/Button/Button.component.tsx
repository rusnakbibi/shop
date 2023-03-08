import { FC } from 'react';

import { ButtonProps, BUTTON_TYPE_CLASSES } from 'types/button.types';

import {
  BaseButton,
  GoogleSignButton,
  InvertedButton,
  ButtonSpinner,
} from './Button.styles';

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  isLoading,
  disabled,
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={disabled} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
