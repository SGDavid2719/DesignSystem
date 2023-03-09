import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Modal } from "./Modal";

export default {
    title: "Molecules/Modal",
    component: Modal,
    argTypes: {},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
    modalTitle: "Modal Title",
    modalBody: <p>Modal body</p>,
    setShowModal: () => {},
};
