import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Image } from "./Image";

export default {
    title: "Atoms/Image",
    component: Image,
    argTypes: {},
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
    src: "./assets/logo.png",
    alt: "alt",
};
