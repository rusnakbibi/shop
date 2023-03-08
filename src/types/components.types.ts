import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';

export type ButtonData = {
  children: string,
  buttonType?: BUTTON_TYPE_CLASSES,
  isLoading?: boolean,
  disabled?: boolean,
}

export enum BUTTON_TYPE_CLASSES {
  base = 'base',
  google = 'googleSignIn',
  inverted = 'inverted',
}

export type ButtonProps = ButtonData & ButtonHTMLAttributes<HTMLButtonElement>;

export type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>

export type CategoryRouteParams = {
  category: string;
}