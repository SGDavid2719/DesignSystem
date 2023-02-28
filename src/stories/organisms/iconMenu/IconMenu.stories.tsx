import { ComponentStory, ComponentMeta } from "@storybook/react";

import { IconMenu } from "./IconMenu";

export default {
    title: "Organisms/IconMenu",
    component: IconMenu,
    argTypes: {},
} as ComponentMeta<typeof IconMenu>;

const Template: ComponentStory<typeof IconMenu> = (args) => (
    <IconMenu {...args} />
);

export const Default = Template.bind({});
Default.args = {
    iconLinks: [
        {
            href: "link1",
            ariaLabel: "link1",
            iconId: "home",
        },
        {
            href: "link2",
            ariaLabel: "link2",
            iconId: "magnifying-glass",
        },
        {
            href: "link3",
            ariaLabel: "link3",
            iconId: "facebook",
        },
        {
            href: "link4",
            ariaLabel: "link4",
            iconId: "twitter",
        },
        {
            href: "link5",
            ariaLabel: "link5",
            iconId: "youtube",
        },
        {
            href: "link6",
            ariaLabel: "link6",
            iconId: "instagram",
        },
    ],
};
