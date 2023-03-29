import { ComponentStory, ComponentMeta } from "@storybook/react";

import { HiddenMenu } from "./HiddenMenu";
import { Rel } from "../../../shared/types";

export default {
    title: "Organisms/HiddenMenu",
    component: HiddenMenu,
    argTypes: {},
} as ComponentMeta<typeof HiddenMenu>;

const Template: ComponentStory<typeof HiddenMenu> = (args) => (
    <HiddenMenu {...args} />
);

export const Default = Template.bind({});
Default.args = {
    menuLinks: [
        {
            href: "link1",
            rel: "next" as Rel,
            ariaLabel: "link1",
            mainText: "Deporte",
            subText: "a la UIB",
        },
        {
            href: "link2",
            rel: "next" as Rel,
            ariaLabel: "link2",
            mainText: "Residencia",
            subText: "de Estudiants",
        },
        {
            href: "link3",
            rel: "next" as Rel,
            ariaLabel: "link3",
            mainText: "OTRI",
            subText: "y Proyectos",
        },
        {
            href: "link4",
            rel: "next" as Rel,
            ariaLabel: "link4",
            mainText: "UIBCongrés",
            subText: "Events Management",
        },
        {
            href: "link5",
            rel: "next" as Rel,
            ariaLabel: "link5",
            mainText: "Orientación",
            subText: "e Inserción Profesional",
        },
        {
            href: "link6",
            rel: "next" as Rel,
            ariaLabel: "link6",
            mainText: "UIBdigital",
            subText: "acceso usuarios",
        },
    ],
};
