import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ImageLink } from "./ImageLink";

export default {
    title: "Molecules/ImageLink",
    component: ImageLink,
    argTypes: {},
} as ComponentMeta<typeof ImageLink>;

const Template: ComponentStory<typeof ImageLink> = (args) => (
    <ImageLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
    href: "href",
    ariaLabel: "logo",
    src: "./assets/logo.png",
    alt: "logo",
};
