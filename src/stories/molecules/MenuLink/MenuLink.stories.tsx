import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MenuLink } from "./MenuLink";

export default {
    title: "Molecules/MenuLink",
    component: MenuLink,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof MenuLink>;

const Template: ComponentStory<typeof MenuLink> = (args) => (
    <MenuLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
    href: "string1",
    ariaLabel: "ariaLabel",
    mainText: "Main text",
    subText: "Sub text",
};

export const WithSubsections = Template.bind({});
WithSubsections.args = {
    href: "string1",
    ariaLabel: "ariaLabel",
    mainText: "Main text",
    subText: "Sub text",
    subSections: [
        {
            href: "string2",
            ariaLabel: "ariaLabel",
            children: "string1",
        },
        {
            href: "string3",
            ariaLabel: "ariaLabel",
            children: "string2",
        },
    ],
};
