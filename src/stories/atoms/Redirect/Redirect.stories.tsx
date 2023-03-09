import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Redirect } from "./Redirect";

export default {
    title: "Atoms/Redirect",
    component: Redirect,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Redirect>;

const Template: ComponentStory<typeof Redirect> = (args) => (
    <Redirect {...args} />
);

export const Default = Template.bind({});
Default.args = {
    href: "/?path=/story/atoms-button--default",
    rel: "next",
    ariaLabel: "button",
};

export const WithChildren = Template.bind({});
WithChildren.args = {
    href: "/?path=/story/atoms-button--default",
    rel: "next",
    ariaLabel: "children",
    children: <p>Children</p>,
};
