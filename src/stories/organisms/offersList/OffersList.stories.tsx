import { ComponentStory, ComponentMeta } from "@storybook/react";

import { OffersList } from "./OffersList";
import { Rel } from "../../../shared/types";

export default {
    title: "Organisms/OffersList",
    component: OffersList,
    argTypes: {},
} as ComponentMeta<typeof OffersList>;

const Template: ComponentStory<typeof OffersList> = (args) => (
    <OffersList {...args} />
);

export const Default = Template.bind({});
Default.args = {
    offerLinks: [
        {
            offerRedirect: {
                href: "href",
                rel: "next" as Rel,
                ariaLabel: "offerRedirect",
                children: "Back office Dpto Expansión (sector hotelero)",
            },
            offerName: "Oferta de trabajo",
            placeName: "Islas Baleares, España",
            publicationDate: new Date(2023, 2, 20),
            referenceNumber: 10742,
        },
        {
            offerRedirect: {
                href: "href",
                rel: "next" as Rel,
                ariaLabel: "offerRedirect",
                children: "Back office Dpto Expansión (sector hotelero)",
            },
            offerName: "Oferta de trabajo",
            placeName: "Islas Baleares, España",
            publicationDate: new Date(2023, 2, 20),
            referenceNumber: 10743,
        },
        {
            offerRedirect: {
                href: "href",
                rel: "next" as Rel,
                ariaLabel: "offerRedirect",
                children: "Back office Dpto Expansión (sector hotelero)",
            },
            offerName: "Oferta de trabajo",
            placeName: "Islas Baleares, España",
            publicationDate: new Date(2023, 2, 20),
            referenceNumber: 10744,
        },
    ],
    redirect: {
        href: "href",
        rel: "next" as Rel,
        ariaLabel: "mainRedirect",
        children: "... visualiza todas las ofertas",
    },
};
