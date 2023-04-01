import { OffersList } from "./OffersList";
import { fireEvent, render, screen } from "@testing-library/react";

describe("OffersList", () => {
    it("debería renderizar 4 elementos con rol 'link'", () => {
        render(
            <OffersList
                offerLinks={[
                    {
                        offerRedirect: {
                            href: "href",
                            rel: "next",
                            ariaLabel: "offerRedirect",
                            children:
                                "Back office Dpto Expansión (sector hotelero)",
                        },
                        offerName: "Oferta de trabajo",
                        placeName: "Islas Baleares, España",
                        publicationDate: new Date(2023, 2, 20),
                        referenceNumber: 10742,
                    },
                    {
                        offerRedirect: {
                            href: "href",
                            rel: "next",
                            ariaLabel: "offerRedirect",
                            children:
                                "Back office Dpto Expansión (sector hotelero)",
                        },
                        offerName: "Oferta de trabajo",
                        placeName: "Islas Baleares, España",
                        publicationDate: new Date(2023, 2, 20),
                        referenceNumber: 10743,
                    },
                    {
                        offerRedirect: {
                            href: "href",
                            rel: "next",
                            ariaLabel: "offerRedirect",
                            children:
                                "Back office Dpto Expansión (sector hotelero)",
                        },
                        offerName: "Oferta de trabajo",
                        placeName: "Islas Baleares, España",
                        publicationDate: new Date(2023, 2, 20),
                        referenceNumber: 10744,
                    },
                ]}
                redirect={{
                    href: "href",
                    rel: "next",
                    ariaLabel: "mainRedirect",
                    children: "... visualiza todas las ofertas",
                }}
            />
        );
        expect(screen.queryAllByRole("link").length).toBe(4);
    });
});
