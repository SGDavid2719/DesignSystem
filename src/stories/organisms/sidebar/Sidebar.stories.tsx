import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Sidebar } from "./Sidebar";

export default {
    title: "Organisms/Sidebar",
    component: Sidebar,
    argTypes: {},
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
    <Sidebar {...args} />
);

export const Default = Template.bind({});
Default.args = {
    sidebarOptions: [
        {
            dropDownTitle: "First section",
            dropDownOptions: [
                {
                    title: "Option 1",
                    id: 1,
                },
                {
                    title: "Option 2",
                    id: 2,
                },
                {
                    title: "Option 3",
                    id: 3,
                },
            ],
        },
        {
            dropDownTitle: "Second section",
            dropDownOptions: [
                {
                    title: "Option 1",
                    id: 4,
                },
                {
                    title: "Option 2",
                    id: 5,
                },
                {
                    title: "Option 3",
                    id: 6,
                },
            ],
        },
    ],
    selectOption: (id: number) => {
        console.log(id);
    },
    sideBarClassName: "rounded",
};
