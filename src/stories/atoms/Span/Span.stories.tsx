import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Span } from './Span';

export default {
  title: 'Atoms/Span',
  component: Span,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Span>;

const Template: ComponentStory<typeof Span> = (args) => <Span {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: "Span"
};