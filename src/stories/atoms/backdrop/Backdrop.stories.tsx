import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Backdrop } from "./Backdrop";

export default {
    title: "Atoms/Backdrop",
    component: Backdrop,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Backdrop>;

const Template: ComponentStory<typeof Backdrop> = (args) => (
    <Backdrop {...args} />
);

export const Default = Template.bind({});
Default.args = {
    onOutsideClick: () => {},
};
