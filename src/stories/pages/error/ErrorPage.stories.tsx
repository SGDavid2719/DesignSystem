import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ErrorPage } from "./ErrorPage";

export default {
    title: "Pages/ErrorPage",
    component: ErrorPage,
    argTypes: {},
} as ComponentMeta<typeof ErrorPage>;

const Template: ComponentStory<typeof ErrorPage> = (args) => <ErrorPage />;

export const Default = Template.bind({});
Default.args = {};
