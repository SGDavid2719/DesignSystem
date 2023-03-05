import { ComponentStory, ComponentMeta } from "@storybook/react";

import { NotFoundPage } from "./NotFoundPage";

export default {
    title: "Pages/NotFoundPage",
    component: NotFoundPage,
    argTypes: {},
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => (
    <NotFoundPage />
);

export const Default = Template.bind({});
Default.args = {};
