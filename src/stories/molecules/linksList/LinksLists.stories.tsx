import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LinksList } from './LinksList';

export default {
  title: 'Molecules/LinksList',
  component: LinksList,
  argTypes: {
  },
} as ComponentMeta<typeof LinksList>;

const Template: ComponentStory<typeof LinksList> = (args) => <LinksList {...args} />;

export const Default = Template.bind({});
Default.args = {
    links: [
        {
            href: "string1",
            children: "Aviso legal",
            ariaLabel: "Aviso legal"
        },
        {
            href: "string2",
            children: "Política de privacidad",
            ariaLabel: "Política de privacidad"
        },
        {
            href: "string3",
            children: "Mapa de contenidos",
            ariaLabel: "Mapa de contenidos"
        },
    ]
};