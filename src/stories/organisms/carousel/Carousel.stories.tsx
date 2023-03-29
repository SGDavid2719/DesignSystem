import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Carousel } from "./Carousel";
import { Rel } from "../../../shared/types";

export default {
    title: "Organisms/Carousel",
    component: Carousel,
    argTypes: {},
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => (
    <Carousel {...args} />
);

export const Default = Template.bind({});
Default.args = {
    carouselImages: [
        {
            href: "href",
            rel: "next" as Rel,
            ariaLabel: "logo",
            src: "./assets/logo.png",
            alt: "logo",
        },
        {
            href: "href",
            rel: "next" as Rel,
            ariaLabel: "logo",
            src: "./assets/departOrient.png",
            alt: "logo",
        },
        {
            href: "href",
            rel: "next" as Rel,
            ariaLabel: "logo",
            src: "./assets/tableroOfertas.png",
            alt: "logo",
        },
    ],
};
