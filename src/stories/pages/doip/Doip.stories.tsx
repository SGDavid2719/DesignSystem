import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DoipPage } from "./Doip";

export default {
    title: "Pages/DoipPage",
    component: DoipPage,
    argTypes: {},
} as ComponentMeta<typeof DoipPage>;

const Template: ComponentStory<typeof DoipPage> = (args) => <DoipPage />;

export const Default = Template.bind({});
Default.args = {};
