import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <Page data-testid="MainPage">
      <div>123</div>
      {t('Главная страница', { ns: 'main' })}
    </Page>
  );
};

export default MainPage;
