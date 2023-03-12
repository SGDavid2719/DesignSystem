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
    accessibilityModalTitle: "Accessibility",
    accessibilityModalContents: [
        {
            dropDownTitle: "Backdrop",
            dropDownOptions: [
                {
                    title: "Option 1",
                    content: (
                        <div>
                            <p>
                                <strong>Button:</strong> Content displayed
                            </p>
                        </div>
                    ),
                    id: 1,
                },
            ],
        },
        {
            dropDownTitle: "Button",
            dropDownOptions: [
                {
                    title: "Option 1",
                    id: 2,
                },
            ],
        },
        {
            dropDownTitle: "Icon",
            dropDownOptions: [
                {
                    title: "Option 1",
                    id: 3,
                },
            ],
        },
        {
            dropDownTitle: "Image",
            dropDownOptions: [
                {
                    title: "Option 1",
                    id: 4,
                },
            ],
        },
        {
            dropDownTitle: "Paragraph",
            dropDownOptions: [
                {
                    title: "Option 1",
                    id: 5,
                },
            ],
        },
        {
            dropDownTitle: "Redirect",
            dropDownOptions: [
                {
                    title: "Option 1",
                    id: 6,
                },
            ],
        },
        {
            dropDownTitle: "Span",
            dropDownOptions: [
                {
                    title: "Option 1",
                    id: 7,
                },
            ],
        },
        {
            dropDownTitle: "Time",
            dropDownOptions: [
                {
                    title: "Option 1",
                    id: 8,
                },
            ],
        },
    ],
};
