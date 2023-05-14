import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const ForbiddenPage = () => {
  const { t } = useTranslation('forbidden');

  return <Page data-testid="ForbiddenPage">{t('У вас нет доступа к этой странице', { ns: 'forbidden' })}</Page>;
};

export default ForbiddenPage;
