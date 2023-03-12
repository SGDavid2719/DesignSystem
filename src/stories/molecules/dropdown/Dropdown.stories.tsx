import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Dropdown } from "./Dropdown";

export default {
    title: "Molecules/Dropdown",
    component: Dropdown,
    argTypes: {},
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
    <Dropdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
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
    selectOption: (id: number) => {
        console.log(id);
    },
};
