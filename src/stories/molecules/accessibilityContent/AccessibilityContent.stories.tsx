import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AccessibilityContent } from "./AccessibilityContent";

export default {
    title: "Molecules/AccessibilityContent",
    component: AccessibilityContent,
    argTypes: {},
} as ComponentMeta<typeof AccessibilityContent>;

const Template: ComponentStory<typeof AccessibilityContent> = (args) => (
    <AccessibilityContent {...args} />
);

export const Default = Template.bind({});
Default.args = {
    title: "Button",
    tags: ["Visibilidad", "Auditiva"],
    body: "Afecta en...",
};
