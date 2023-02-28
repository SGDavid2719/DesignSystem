import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MenuButton } from "./MenuButton";

export default {
    title: "Molecules/MenuButton",
    component: MenuButton,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof MenuButton>;

const Template: ComponentStory<typeof MenuButton> = (args) => (
    <MenuButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
    sections: [
        {
            title: "Universitaris",
            sectionLinks: [
                {
                    href: "link1",
                    ariaLabel: "link1",
                    mainText: "Deporte",
                    subText: "a la UIB",
                },
                {
                    href: "link2",
                    ariaLabel: "link2",
                    mainText: "Residencia",
                    subText: "de Estudiants",
                },
                {
                    href: "link3",
                    ariaLabel: "link3",
                    mainText: "OTRI",
                    subText: "y Proyectos",
                },
                {
                    href: "link4",
                    ariaLabel: "link4",
                    mainText: "UIBCongrés",
                    subText: "Events Management",
                },
                {
                    href: "link5",
                    ariaLabel: "link5",
                    mainText: "Orientación",
                    subText: "e Inserción Profesional",
                },
                {
                    href: "link6",
                    ariaLabel: "link6",
                    mainText: "UIBdigital",
                    subText: "acceso usuarios",
                },
                {
                    href: "link7",
                    ariaLabel: "link7",
                    mainText: "UIBdigital",
                    subText: "acceso usuarios",
                },
            ],
        },
        {
            title: "Universitaris",
            sectionLinks: [
                {
                    href: "link1",
                    ariaLabel: "link1",
                    mainText: "Deporte",
                    subText: "a la UIB",
                },
                {
                    href: "link2",
                    ariaLabel: "link2",
                    mainText: "Residencia",
                    subText: "de Estudiants",
                },
                {
                    href: "link3",
                    ariaLabel: "link3",
                    mainText: "OTRI",
                    subText: "y Proyectos",
                },
                {
                    href: "link4",
                    ariaLabel: "link4",
                    mainText: "UIBCongrés",
                    subText: "Events Management",
                },
                {
                    href: "link5",
                    ariaLabel: "link5",
                    mainText: "Orientación",
                    subText: "e Inserción Profesional",
                },
                {
                    href: "link6",
                    ariaLabel: "link6",
                    mainText: "UIBdigital",
                    subText: "acceso usuarios",
                },
                {
                    href: "link7",
                    ariaLabel: "link7",
                    mainText: "UIBdigital",
                    subText: "acceso usuarios",
                },
            ],
        },
        {
            title: "Universitaris",
            sectionLinks: [
                {
                    href: "link1",
                    ariaLabel: "link1",
                    mainText: "Deporte",
                    subText: "a la UIB",
                },
                {
                    href: "link2",
                    ariaLabel: "link2",
                    mainText: "Residencia",
                    subText: "de Estudiants",
                },
                {
                    href: "link3",
                    ariaLabel: "link3",
                    mainText: "OTRI",
                    subText: "y Proyectos",
                },
                {
                    href: "link4",
                    ariaLabel: "link4",
                    mainText: "UIBCongrés",
                    subText: "Events Management",
                },
                {
                    href: "link5",
                    ariaLabel: "link5",
                    mainText: "Orientación",
                    subText: "e Inserción Profesional",
                },
                {
                    href: "link6",
                    ariaLabel: "link6",
                    mainText: "UIBdigital",
                    subText: "acceso usuarios",
                },
                {
                    href: "link7",
                    ariaLabel: "link7",
                    mainText: "UIBdigital",
                    subText: "acceso usuarios",
                },
            ],
        },
        {
            title: "Universitaris",
            sectionLinks: [
                {
                    href: "link1",
                    ariaLabel: "link1",
                    mainText: "Deporte",
                    subText: "a la UIB",
                },
                {
                    href: "link2",
                    ariaLabel: "link2",
                    mainText: "Residencia",
                    subText: "de Estudiants",
                },
                {
                    href: "link3",
                    ariaLabel: "link3",
                    mainText: "OTRI",
                    subText: "y Proyectos",
                },
                {
                    href: "link4",
                    ariaLabel: "link4",
                    mainText: "UIBCongrés",
                    subText: "Events Management",
                },
                {
                    href: "link5",
                    ariaLabel: "link5",
                    mainText: "Orientación",
                    subText: "e Inserción Profesional",
                },
                {
                    href: "link6",
                    ariaLabel: "link6",
                    mainText: "UIBdigital",
                    subText: "acceso usuarios",
                },
                {
                    href: "link7",
                    ariaLabel: "link7",
                    mainText: "UIBdigital",
                    subText: "acceso usuarios",
                },
            ],
        },
    ],
};
