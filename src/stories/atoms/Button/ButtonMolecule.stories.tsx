// import { userEvent, within } from "@storybook/testing-library";
// import { expect, jest } from "@storybook/jest";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
    title: "Molecules/ButtonWithIcon",
    component: Button,
    argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const WithIcon = Template.bind({});
WithIcon.args = {
    label: "Button",
    renderIcon: "add",
    align: "start",
};

// Default.play = async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const handleOnClick = jest.spyOn(canvas, "onClick" as any);
//     await userEvent.click(canvas.getByRole("button"));
//     expect(handleOnClick).toHaveBeenCalled();
// };
