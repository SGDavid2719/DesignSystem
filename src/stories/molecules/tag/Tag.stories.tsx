import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tag } from "./Tag";

export default {
    title: "Molecules/Tag",
    component: Tag,
    argTypes: {},
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: "Tag",
};
