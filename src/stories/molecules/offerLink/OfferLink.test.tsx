import { dateDiffInDays } from "../../../utils/dateFunctions";
import { OfferLink } from "./OfferLink";
import { render, screen } from "@testing-library/react";

describe("OfferLink", () => {
    it("debería renderizar el enlace, el título, subtítulo, nombre, lugar, fecha y número de referencia", () => {
        render(
            <OfferLink
                offerRedirect={{
                    href: "href",
                    rel: "next",
                    ariaLabel: "offerRedirect",
                    children: "Back office Dpto Expansión (sector hotelero)",
                }}
                firstSubtitle="MERKUR DOSNIHA"
                secondSubtitle="Altres serveis tècnics"
                offerName="Oferta de trabajo"
                placeName="Islas Baleares, España"
                publicationDate={new Date(2023, 2, 20)}
                referenceNumber={10742}
            />
        );
        expect(
            screen.getByText("Back office Dpto Expansión (sector hotelero)")
        ).toBeInTheDocument();
        expect(screen.getByText("MERKUR DOSNIHA")).toBeInTheDocument();
        expect(screen.getByText("Altres serveis tècnics")).toBeInTheDocument();
        expect(screen.getByText("Oferta de trabajo")).toBeInTheDocument();
        expect(screen.getByText("Islas Baleares, España")).toBeInTheDocument();
        expect(
            screen.getByText(
                `Hace ${dateDiffInDays(new Date(), new Date(2023, 2, 20))} días`
            )
        ).toBeInTheDocument();
        expect(screen.getByText("Ref. 10742")).toBeInTheDocument();
    });

    it("no debería renderizar  el título ni el subtítulo", () => {
        render(
            <OfferLink
                offerRedirect={{
                    href: "href",
                    rel: "next",
                    ariaLabel: "offerRedirect",
                    children: "Back office Dpto Expansión (sector hotelero)",
                }}
                offerName="Oferta de trabajo"
                placeName="Islas Baleares, España"
                publicationDate={new Date(2023, 2, 20)}
                referenceNumber={10742}
            />
        );
        expect(screen.queryByText("MERKUR DOSNIHA")).not.toBeInTheDocument();
        expect(
            screen.queryByText("Altres serveis tècnics")
        ).not.toBeInTheDocument();
    });
});
