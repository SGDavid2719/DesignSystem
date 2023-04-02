import { OfficesList } from "./OfficesList";
import { fireEvent, render, screen } from "@testing-library/react";

describe("OfficesList", () => {
    it("debería renderizar 16 elementos con rol 'img'", () => {
        render(
            <OfficesList
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
            />
        );
        expect(screen.queryAllByRole("graphics-symbol").length).toBe(16);
    });
});
