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
    modalBody: <p className="p-4">Modal body</p>,
    setShowModal: () => {},
};

export const LeftModal = Template.bind({});
LeftModal.args = {
    modalTitle: "Modal Title",
    modalBody: <p className="p-4">Modal body</p>,
    setShowModal: () => {},
    align: "left",
};
