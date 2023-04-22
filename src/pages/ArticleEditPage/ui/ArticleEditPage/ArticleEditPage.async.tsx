import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // Задержка для разработки
      setTimeout(() => resolve(import('./ArticleEditPage')), 400);
    })
);
