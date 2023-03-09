import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AccessibilityModal } from "./AccessibilityModal";

export default {
    title: "Organisms/AccessibilityModal",
    component: AccessibilityModal,
    argTypes: {},
} as ComponentMeta<typeof AccessibilityModal>;

const Template: ComponentStory<typeof AccessibilityModal> = (args) => (
    <AccessibilityModal {...args} />
);

export const Default = Template.bind({});
Default.args = {};
