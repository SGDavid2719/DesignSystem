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
Default.args = {
    sidebarOptions: [
        [
            {
                text: "Option 1",
                id: 1,
            },
            {
                text: "Option 2",
                id: 2,
            },
            {
                text: "Option 3",
                id: 3,
            },
        ],
        [
            {
                text: "Option 1",
                id: 4,
            },
            {
                text: "Option 2",
                id: 5,
            },
            {
                text: "Option 3",
                id: 6,
            },
        ],
    ],
};
