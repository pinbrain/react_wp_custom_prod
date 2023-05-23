import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 100 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
  <ListBox {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  label: 'Укажите значение',
  defaultValue: 'Выберите из списка',
  items: [
    { value: '1', content: 'Первый пункт' },
    { value: '2', content: 'Второй пункт', disabled: true },
    { value: '3', content: 'Третий пункт' },
  ],
};

export const topLeft = Template.bind({});
topLeft.args = {
  label: 'Укажите значение',
  defaultValue: 'Выбор',
  direction: 'top left',
  items: [
    { value: '1', content: 'Первый пункт' },
    { value: '2', content: 'Второй пункт', disabled: true },
    { value: '3', content: 'Третий пункт' },
  ],
};

export const topRight = Template.bind({});
topRight.args = {
  label: 'Укажите значение',
  defaultValue: 'Выбор',
  direction: 'top right',
  items: [
    { value: '1', content: 'Первый пункт' },
    { value: '2', content: 'Второй пункт', disabled: true },
    { value: '3', content: 'Третий пункт' },
  ],
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
  label: 'Укажите значение',
  defaultValue: 'Выбор',
  direction: 'bottom left',
  items: [
    { value: '1', content: 'Первый пункт' },
    { value: '2', content: 'Второй пункт', disabled: true },
    { value: '3', content: 'Третий пункт' },
  ],
};

export const bottomRight = Template.bind({});
bottomRight.args = {
  label: 'Укажите значение',
  defaultValue: 'Выбор',
  direction: 'bottom right',
  items: [
    { value: '1', content: 'Первый пункт' },
    { value: '2', content: 'Второй пункт', disabled: true },
    { value: '3', content: 'Третий пункт' },
  ],
};
