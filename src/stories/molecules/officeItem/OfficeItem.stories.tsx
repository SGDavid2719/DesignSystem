import { ComponentStory, ComponentMeta } from "@storybook/react";

import { OfficeItem } from "./OfficeItem";

export default {
    title: "Molecules/OfficeItem",
    component: OfficeItem,
    argTypes: {},
} as ComponentMeta<typeof OfficeItem>;

const Template: ComponentStory<typeof OfficeItem> = (args) => (
    <OfficeItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
    name: "DOIP Campus",
    location:
        "Ctra. de Valldemossa, km 7.5 (Edificio Instalaciones Deportivas, Campus UIB). 07122 Palma, Illes Balears (España)",
    phoneNumber: "(+34) 971259697",
    email: "doip@fueib.org",
    schedules: ["Lu-Ju: 08:00-15:30", "Vi: 08:00-15:00"],
};
