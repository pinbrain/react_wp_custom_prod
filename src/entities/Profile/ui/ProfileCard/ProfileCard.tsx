import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeCity,
    onChangeAge,
    onChangeUsername,
    onChangeAvatar,
    onChangeCountry,
    onChangeCurrency,
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('Произошла ошибка при загрузке профиля', { ns: 'profile' })}
          text={t('Попробуйте обновить страницу', { ns: 'profile' })}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div className={cls.data}>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data?.avatar} />
          </div>
        )}
        <Input
          className={cls.input}
          value={data?.first}
          placeholder={t('Ваше имя', { ns: 'profile' })}
          onChange={onChangeFirstname}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.lastname}
          placeholder={t('Ваша фамилия', { ns: 'profile' })}
          onChange={onChangeLastname}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.age}
          placeholder={t('Ваша возраст', { ns: 'profile' })}
          onChange={onChangeAge}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.city}
          placeholder={t('Город', { ns: 'profile' })}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.username}
          placeholder={t('Введите имя пользователя', { ns: 'profile' })}
          onChange={onChangeUsername}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.avatar}
          placeholder={t('Введите ссылку на аватар', { ns: 'profile' })}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
        <CurrencySelect className={cls.input} value={data?.currency} onChange={onChangeCurrency} readonly={readonly} />
        <CountrySelect className={cls.input} value={data?.country} onChange={onChangeCountry} readonly={readonly} />
      </div>
    </div>
  );
};