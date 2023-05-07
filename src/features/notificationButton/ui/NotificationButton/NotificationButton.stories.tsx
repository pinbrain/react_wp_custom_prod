import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Notification } from '@/entities/Notifications';
import { NotificationButton } from './NotificationButton';

export default {
  title: 'features/NotificationButton',
  component: NotificationButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({}), withMock],
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => <NotificationButton {...args} />;

const notifications: Notification = {
  id: '1',
  title: 'Уведомление 1',
  description: 'Произошло какое-то событие',
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: [
        { ...notifications, id: '1' },
        { ...notifications, id: '2' },
        { ...notifications, id: '3' },
      ],
    },
  ],
};
