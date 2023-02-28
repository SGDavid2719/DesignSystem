import { ComponentStory, ComponentMeta } from "@storybook/react";

import { InfoCard } from "./InfoCard";

export default {
    title: "Organisms/InfoCard",
    component: InfoCard,
    argTypes: {},
} as ComponentMeta<typeof InfoCard>;

const Template: ComponentStory<typeof InfoCard> = (args) => (
    <InfoCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
    cardPhoto: {
        href: "href",
        ariaLabel: "logo",
        src: "./assets/logo.png",
        alt: "logo",
    },
    dateTime: new Date(2020, 4, 20),
    mainRedirect: {
        href: "href",
        ariaLabel: "mainRedirect",
        children:
            "1.256 ofertas de trabajo y 589 prácticas extracurriculares, balance del DOIP durante el curso 2021-22",
    },
    secondaryRedirect: {
        href: "href",
        ariaLabel: "secondaryRedirect",
        children: "Doip",
    },
    text: "Durante el curso 2021-22, 589 estudiantes han podido realizar prácticas extracurriculares a empresas y se han gestionado 1.256 ofertas laborales. El número de contratos laborales firmados de los que se tiene constancia es de 197.",
    iconId: "tags",
};
