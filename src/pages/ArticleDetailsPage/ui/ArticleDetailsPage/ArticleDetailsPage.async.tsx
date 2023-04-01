import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // Задержка для разработки
      setTimeout(() => resolve(import('./ArticleDetailsPage')), 400);
    })
);
