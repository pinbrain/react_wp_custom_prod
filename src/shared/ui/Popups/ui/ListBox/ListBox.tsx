import { Listbox as HListbox } from '@headlessui/react';
import { Fragment, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '../../../../types/ui';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../Stack';
import { mapDirectionClass } from '../../styles/consts';
import cls from './ListBox.module.scss';
import popupCls from '../../styles/popup.module.scss';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
  items?: ListBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

export const ListBox = memo((props: ListBoxProps) => {
  const {
    items,
    className,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = 'bottom right',
    label,
  } = props;

  const optionsClasses = [mapDirectionClass[direction]];

  return (
    <HStack gap="4">
      {label && (
        <span
          className={classNames('', { [cls.disabled]: readonly }, [])}
        >{`${label}>`}</span>
      )}
      <HListbox
        disabled={readonly}
        as="div"
        className={classNames(cls.listBox, {}, [className, popupCls.popup])}
        value={value}
        onChange={onChange}
      >
        <HListbox.Button className={cls.trigger} as="div">
          <Button disabled={readonly}>{value ?? defaultValue}</Button>
        </HListbox.Button>
        <HListbox.Options
          className={classNames(cls.options, {}, optionsClasses)}
        >
          {items?.map((item) => (
            <HListbox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(
                    cls.item,
                    {
                      [popupCls.active]: active,
                      [popupCls.disabled]: item.disabled,
                    },
                    [],
                  )}
                >
                  {item.content}
                </li>
              )}
            </HListbox.Option>
          ))}
        </HListbox.Options>
      </HListbox>
    </HStack>
  );
});
