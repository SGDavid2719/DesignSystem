import { ComponentStory, ComponentMeta } from "@storybook/react";

import { IconMenu } from "./IconMenu";
import { Rel } from "../../../shared/types";

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
            rel: "next" as Rel,
            ariaLabel: "link1",
            iconId: "home",
        },
        {
            href: "link2",
            rel: "next" as Rel,
            ariaLabel: "link2",
            iconId: "magnifying-glass",
        },
        {
            href: "link3",
            rel: "next" as Rel,
            ariaLabel: "link3",
            iconId: "facebook",
        },
        {
            href: "link4",
            rel: "next" as Rel,
            ariaLabel: "link4",
            iconId: "twitter",
        },
        {
            href: "link5",
            rel: "next" as Rel,
            ariaLabel: "link5",
            iconId: "youtube",
        },
        {
            href: "link6",
            rel: "next" as Rel,
            ariaLabel: "link6",
            iconId: "instagram",
        },
    ],
};
