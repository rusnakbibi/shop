import { InputHTMLAttributes } from 'react';

export type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>