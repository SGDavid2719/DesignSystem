import { InfoCard } from "./InfoCard";
import { render, screen } from "@testing-library/react";

describe("InfoCard", () => {
    it("debería renderizar 2 elementos con rol `img`, 3 con rol `link`", () => {
        render(
            <InfoCard
                cardPhoto={{
                    href: "href",
                    rel: "next",
                    ariaLabel: "logo",
                    src: "./assets/logo.png",
                    alt: "logo",
                }}
                dateTime={new Date(2020, 4, 20)}
                mainRedirect={{
                    href: "href",
                    rel: "next",
                    ariaLabel: "mainRedirect",
                    children:
                        "1.256 ofertas de trabajo y 589 prácticas extracurriculares, balance del DOIP durante el curso 2021-22",
                }}
                secondaryRedirect={{
                    href: "href",
                    rel: "next",
                    ariaLabel: "secondaryRedirect",
                    children: "Doip",
                }}
                text="Durante el curso 2021-22, 589 estudiantes han podido realizar prácticas extracurriculares a empresas y se han gestionado 1.256 ofertas laborales. El número de contratos laborales firmados de los que se tiene constancia es de 197."
                iconId="tags"
            />
        );
        expect(screen.getAllByRole("link").length).toBe(3);
        expect(screen.getAllByRole("img").length).toBe(2);
    });
});
