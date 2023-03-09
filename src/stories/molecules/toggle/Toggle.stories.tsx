import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Toggle } from "./Toggle";

export default {
    title: "Molecules/Toggle",
    component: Toggle,
    argTypes: {},
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
    id: "toggle",
    label: "Toggle element label",
    checkedText: "On",
    notCheckedText: "Off",
    toggleId: "toggleId",
    ariaLabel: "Toggle",
};
