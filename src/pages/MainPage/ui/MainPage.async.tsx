import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // Задержка для разработки
  setTimeout(() => resolve(import('./MainPage')), 1500);
}));
