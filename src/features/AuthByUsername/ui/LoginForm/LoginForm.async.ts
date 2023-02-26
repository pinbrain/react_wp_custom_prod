import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';
// prettier-ignore
export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
  // @ts-ignore
  // Задержка для разработки
  setTimeout(() => resolve(import('./LoginForm')), 1500);
}));
