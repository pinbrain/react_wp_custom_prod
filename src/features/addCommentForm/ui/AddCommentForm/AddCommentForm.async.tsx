import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

// prettier-ignore
export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(() => new Promise((resolve) => {
  // @ts-ignore
  // Задержка для разработки
  setTimeout(() => resolve(import('./AddCommentForm')), 1500);
}));
