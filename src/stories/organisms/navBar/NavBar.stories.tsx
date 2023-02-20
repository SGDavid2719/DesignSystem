import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavBar } from './NavBar';

export default {
  title: 'Organisms/NavBar',
  component: NavBar,
  argTypes: {
  },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {
    mainLinks: [
        {
            href: "link1",
            ariaLabel: "link1",
            mainText: "Deporte",
            subText: "a la UIB",
            subSections: [
              {
                href: "string",
                ariaLabel: "ariaLabel",
                children: "string"
              },
              {
                href: "string",
                ariaLabel: "ariaLabel",
                children: "string"
              }
            ]
        },
        {
            href: "link2",
            ariaLabel: "link2",
            mainText: "Residencia",
            subText: "de Estudiants",
            subSections: [
              {
                href: "string",
                ariaLabel: "ariaLabel",
                children: "string"
              },
              {
                href: "string",
                ariaLabel: "ariaLabel",
                children: "string"
              }
            ]
        },
        {
            href: "link3",
            ariaLabel: "link3",
            mainText: "OTRI",
            subText: "y Proyectos",
            subSections: [
              {
                href: "string",
                ariaLabel: "ariaLabel",
                children: "string"
              },
              {
                href: "string",
                ariaLabel: "ariaLabel",
                children: "string"
              }
            ]
        },
        {
            href: "link4",
            ariaLabel: "link4",
            mainText: "UIBCongrés",
            subText: "Events Management",
            subSections: [
              {
                href: "string",
                ariaLabel: "ariaLabel",
                children: "string"
              },
              {
                href: "string",
                ariaLabel: "ariaLabel",
                children: "string"
              }
            ]
        },
        {
            href: "link5",
            ariaLabel: "link5",
            mainText: "Orientación",
            subText: "e Inserción Profesional",
            subSections: [
              {
                href: "string",
                ariaLabel: "ariaLabel",
                children: "string"
              },
              {
                href: "string",
                ariaLabel: "ariaLabel",
                children: "string"
              }
            ]
        },
        {
            href: "link6",
            ariaLabel: "link6",
            mainText: "UIBdigital",
            subText: "acceso usuarios",
            subSections: [
              {
                href: "string",
                ariaLabel: "ariaLabel",
                children: "string"
              },
              {
                href: "string",
                ariaLabel: "ariaLabel",
                children: "string"
              }
            ]
        },
        {
            href: "link7",
            ariaLabel: "link7",
            mainText: "UIBdigital",
            subText: "acceso usuarios",
            subSections: [
              {
                href: "string",
                ariaLabel: "ariaLabel",
                children: "string"
              },
              {
                href: "string",
                ariaLabel: "ariaLabel",
                children: "string"
              }
            ]
        }
    ],
    sections: [
        {
            title: "Universitaris",
            sectionLinks: [
                {
                    href: "link1",
                    ariaLabel: "link1",
                    mainText: "Deporte",
                    subText: "a la UIB"
                },
                {
                    href: "link2",
                    ariaLabel: "link2",
                    mainText: "Residencia",
                    subText: "de Estudiants"
                },
                {
                    href: "link3",
                    ariaLabel: "link3",
                    mainText: "OTRI",
                    subText: "y Proyectos"
                },
                {
                    href: "link4",
                    ariaLabel: "link4",
                    mainText: "UIBCongrés",
                    subText: "Events Management"
                },
                {
                    href: "link5",
                    ariaLabel: "link5",
                    mainText: "Orientación",
                    subText: "e Inserción Profesional"
                },
                {
                    href: "link6",
                    ariaLabel: "link6",
                    mainText: "UIBdigital",
                    subText: "acceso usuarios"
                },
                {
                    href: "link7",
                    ariaLabel: "link7",
                    mainText: "UIBdigital",
                    subText: "acceso usuarios"
                }
            ]
        },
        {
            title: "Universitaris",
            sectionLinks: [
                {
                    href: "link1",
                    ariaLabel: "link1",
                    mainText: "Deporte",
                    subText: "a la UIB"
                },
                {
                    href: "link2",
                    ariaLabel: "link2",
                    mainText: "Residencia",
                    subText: "de Estudiants"
                },
                {
                    href: "link3",
                    ariaLabel: "link3",
                    mainText: "OTRI",
                    subText: "y Proyectos"
                },
                {
                    href: "link4",
                    ariaLabel: "link4",
                    mainText: "UIBCongrés",
                    subText: "Events Management"
                },
                {
                    href: "link5",
                    ariaLabel: "link5",
                    mainText: "Orientación",
                    subText: "e Inserción Profesional"
                },
                {
                    href: "link6",
                    ariaLabel: "link6",
                    mainText: "UIBdigital",
                    subText: "acceso usuarios"
                },
                {
                    href: "link7",
                    ariaLabel: "link7",
                    mainText: "UIBdigital",
                    subText: "acceso usuarios"
                }
            ]
        },
        {
            title: "Universitaris",
            sectionLinks: [
                {
                    href: "link1",
                    ariaLabel: "link1",
                    mainText: "Deporte",
                    subText: "a la UIB"
                },
                {
                    href: "link2",
                    ariaLabel: "link2",
                    mainText: "Residencia",
                    subText: "de Estudiants"
                },
                {
                    href: "link3",
                    ariaLabel: "link3",
                    mainText: "OTRI",
                    subText: "y Proyectos"
                },
                {
                    href: "link4",
                    ariaLabel: "link4",
                    mainText: "UIBCongrés",
                    subText: "Events Management"
                },
                {
                    href: "link5",
                    ariaLabel: "link5",
                    mainText: "Orientación",
                    subText: "e Inserción Profesional"
                },
                {
                    href: "link6",
                    ariaLabel: "link6",
                    mainText: "UIBdigital",
                    subText: "acceso usuarios"
                },
                {
                    href: "link7",
                    ariaLabel: "link7",
                    mainText: "UIBdigital",
                    subText: "acceso usuarios"
                }
            ]
        },
        {
            title: "Universitaris",
            sectionLinks: [
                {
                    href: "link1",
                    ariaLabel: "link1",
                    mainText: "Deporte",
                    subText: "a la UIB"
                },
                {
                    href: "link2",
                    ariaLabel: "link2",
                    mainText: "Residencia",
                    subText: "de Estudiants"
                },
                {
                    href: "link3",
                    ariaLabel: "link3",
                    mainText: "OTRI",
                    subText: "y Proyectos"
                },
                {
                    href: "link4",
                    ariaLabel: "link4",
                    mainText: "UIBCongrés",
                    subText: "Events Management"
                },
                {
                    href: "link5",
                    ariaLabel: "link5",
                    mainText: "Orientación",
                    subText: "e Inserción Profesional"
                },
                {
                    href: "link6",
                    ariaLabel: "link6",
                    mainText: "UIBdigital",
                    subText: "acceso usuarios"
                },
                {
                    href: "link7",
                    ariaLabel: "link7",
                    mainText: "UIBdigital",
                    subText: "acceso usuarios"
                }
            ]
        }
      ]
};