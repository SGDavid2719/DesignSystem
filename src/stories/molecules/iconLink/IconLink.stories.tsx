import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconLink } from './IconLink';

export default {
  title: 'Molecules/IconLink',
  component: IconLink,
  argTypes: {
  },
} as ComponentMeta<typeof IconLink>;

const Template: ComponentStory<typeof IconLink> = (args) => <IconLink {...args} />;

export const Default = Template.bind({});
Default.args = {
    href: "href",
    ariaLabel: "home",
    iconId: "home"
};