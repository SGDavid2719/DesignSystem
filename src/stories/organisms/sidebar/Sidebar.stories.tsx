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
    ],
    selectOption: (id: number) => {
        console.log(id);
    },
};
