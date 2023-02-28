import { lazy } from 'react';

// prettier-ignore
export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // Задержка для разработки
  setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));
