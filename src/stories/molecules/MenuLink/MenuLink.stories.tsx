import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MenuLink } from './MenuLink';

export default {
  title: 'Molecules/MenuLink',
  component: MenuLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MenuLink>;

const Template: ComponentStory<typeof MenuLink> = (args) => <MenuLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: "string",
  ariaLabel: "ariaLabel",
  mainText: "Main text",
  subText: "Sub text"
};

export const WithSubsections = Template.bind({});
WithSubsections.args = {
  href: "string",
  ariaLabel: "ariaLabel",
  mainText: "Main text",
  subText: "Sub text",
  subSections: [
    {
      href: "string",
      ariaLabel: "ariaLabel",
      children: "string"
    },
    {
      href: "string",
      ariaLabel: "ariaLabel",
      children: "string"
    }
  ]
};