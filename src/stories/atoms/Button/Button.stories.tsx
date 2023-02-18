import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Button",
	onClick: () => {
		console.log("Testing button onClick function");
	},
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: "Button",
	renderIcon: "add",
  align: "start",
};