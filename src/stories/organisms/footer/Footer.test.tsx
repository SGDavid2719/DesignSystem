import { Footer } from "./Footer";
import { render, screen } from "@testing-library/react";

describe("Footer", () => {
    it("debería renderizar 11 enlaces y 22 iconos", () => {
        render(
            <Footer
                officesList={[
                    {
                        name: "DOIP Campus",
                        location:
                            "Ctra. de Valldemossa, km 7.5 (Edificio Instalaciones Deportivas, Campus UIB). 07122 Palma, Illes Balears (España)",
                        phoneNumber: "(+34) 971259697",
                        email: "doip@fueib.org",
                        schedules: ["Lu-Ju: 08:00-15:30", "Vi: 08:00-15:00"],
                    },
                    {
                        name: "DOIP Menorca",
                        location:
                            "Calle de Santa Rita 11 (Sede universitaria de Menorca) . 07730 Alaior, Illes Balears (España)",
                        phoneNumber: "(+34) 661280318",
                        email: "josep.capo@fueib.org",
                        schedules: [
                            "Lu-Ma: 08:00-15:30",
                            "Mi: 09:00-16:30",
                            "Ju-Vi: 09:00-15:30",
                        ],
                    },
                    {
                        name: "DOIP Pitiüses",
                        location:
                            "Calle Calvari,1 (Antiguo Edificio de la Comandancia). 07800 Ibiza, Illes Balears (España)",
                        phoneNumber: "(+34) 661281650",
                        email: "carla.blancafort@fueib.org",
                        schedules: ["Lu: 09:00-16:30", "Ma-Vi: 08:00-15:30"],
                    },
                    {
                        name: "DOIP Palma",
                        location:
                            "Calle Miquel de Sants i Oliver, 2 (Edificio Sa Riera). 07012 Palma, Illes Balears (España)",
                        phoneNumber: "(+34) 971173302",
                        email: "orientacio@fueib.org",
                        schedules: [
                            "Lu-Mi: 08:00-15:30",
                            "Ju: 08:00-17:00",
                            "Vi: 08:00-15:00",
                        ],
                    },
                ]}
                mainParagraph="© 2023. Fundació Universitat-Empresa de les Illes Balears MP. CIF: G07779895"
                secondaryParagraph="Agencia de colocación nº0400000007"
                iconsLinks={[
                    {
                        href: "link1",
                        rel: "next",
                        ariaLabel: "link1",
                        iconId: "home",
                        iconClassName: "text-blue-400",
                    },
                    {
                        href: "link2",
                        rel: "next",
                        ariaLabel: "link2",
                        iconId: "magnifying-glass",
                        iconClassName: "text-blue-400",
                    },
                    {
                        href: "link3",
                        rel: "next",
                        ariaLabel: "link3",
                        iconId: "facebook",
                        iconClassName: "text-blue-400",
                    },
                    {
                        href: "link4",
                        rel: "next",
                        ariaLabel: "link4",
                        iconId: "twitter",
                        iconClassName: "text-blue-400",
                    },
                    {
                        href: "link5",
                        rel: "next",
                        ariaLabel: "link5",
                        iconId: "youtube",
                        iconClassName: "text-blue-400",
                    },
                    {
                        href: "link6",
                        rel: "next",
                        ariaLabel: "link6",
                        iconId: "instagram",
                        iconClassName: "text-blue-400",
                    },
                ]}
                mainLinks={[
                    {
                        href: "string1",
                        rel: "next",
                        children: "Aviso legal",
                        ariaLabel: "Aviso legal",
                    },
                    {
                        href: "string2",
                        rel: "next",
                        children: "Política de privacidad",
                        ariaLabel: "Política de privacidad",
                    },
                    {
                        href: "string3",
                        rel: "next",
                        children: "Mapa de contenidos",
                        ariaLabel: "Mapa de contenidos",
                    },
                ]}
                secondaryLinks={[
                    {
                        href: "string4",
                        rel: "next",
                        children: "Política de cookies (galetes)",
                        ariaLabel: "Política de cookies (galetes)",
                    },
                    {
                        href: "string5",
                        rel: "next",
                        children: "Configurar cookies (galetes)",
                        ariaLabel: "Configurar cookies (galetes)",
                    },
                ]}
            />
        );
        expect(screen.getAllByRole("graphics-symbol").length).toBe(22);
        expect(screen.getAllByRole("link").length).toBe(11);
    });
});
