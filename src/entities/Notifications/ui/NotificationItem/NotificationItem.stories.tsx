import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NotificationItem } from './NotificationItem';

export default {
  title: 'entities/Notifications/NotificationItem',
  component: NotificationItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
  <NotificationItem {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  item: {
    id: '1',
    title: 'Уведомление 1',
    description: 'Текст уведомления с деталями',
  },
};
