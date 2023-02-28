import { ComponentStory, ComponentMeta } from "@storybook/react";

import { OfferLink } from "./OfferLink";

export default {
    title: "Molecules/OfferLink",
    component: OfferLink,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof OfferLink>;

const Template: ComponentStory<typeof OfferLink> = (args) => (
    <OfferLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
    offerRedirect: {
        href: "href",
        ariaLabel: "offerRedirect",
        children: "Back office Dpto Expansión (sector hotelero)",
    },
    firstSubtitle: "MERKUR DOSNIHA",
    secondSubtitle: "Altres serveis tècnics",
    offerName: "Oferta de trabajo",
    placeName: "Islas Baleares, España",
    publicationDate: new Date(2023, 2, 20),
    referenceNumber: 10742,
};
