import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Time } from './Time';

export default {
  title: 'Atoms/Time',
  component: Time,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Time>;

const Template: ComponentStory<typeof Time> = (args) => <Time {...args} />;

export const Default = Template.bind({});
Default.args = {
  dateTime: new Date(2020, 4, 20)
};