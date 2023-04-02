import { OfficeItem } from "./OfficeItem";
import { render, screen } from "@testing-library/react";

describe("OfficeItem", () => {
    it("debería renderizar el nombre, el lugar, el número de teléfono y el correo", () => {
        render(
            <OfficeItem
                name="DOIP Campus"
                location="Ctra. de Valldemossa, km 7.5 (Edificio Instalaciones Deportivas, Campus UIB). 07122 Palma, Illes Balears (España)"
                phoneNumber="(+34) 971259697"
                email="doip@fueib.org"
                schedules={["Lu-Ju: 08:00-15:30", "Vi: 08:00-15:00"]}
            />
        );
        expect(screen.getByText("DOIP Campus")).toBeInTheDocument();
        expect(
            screen.getByText(
                "Ctra. de Valldemossa, km 7.5 (Edificio Instalaciones Deportivas, Campus UIB). 07122 Palma, Illes Balears (España)"
            )
        ).toBeInTheDocument();
        expect(screen.getByText("(+34) 971259697")).toBeInTheDocument();
        expect(screen.getByText("doip@fueib.org")).toBeInTheDocument();
    });

    it("debería renderizar los iconos", () => {
        render(
            <OfficeItem
                name="DOIP Campus"
                location="Ctra. de Valldemossa, km 7.5 (Edificio Instalaciones Deportivas, Campus UIB). 07122 Palma, Illes Balears (España)"
                phoneNumber="(+34) 971259697"
                email="doip@fueib.org"
                schedules={["Lu-Ju: 08:00-15:30", "Vi: 08:00-15:00"]}
            />
        );
        const icons = document.querySelectorAll("svg");
        expect(icons.length).toBe(4);
    });

    // it("debería renderizar los horarios", () => {
    //     render(
    //         <OfficeItem
    //             name="DOIP Campus"
    //             location="Ctra. de Valldemossa, km 7.5 (Edificio Instalaciones Deportivas, Campus UIB). 07122 Palma, Illes Balears (España)"
    //             phoneNumber="(+34) 971259697"
    //             email="doip@fueib.org"
    //             schedules={["Lu-Ju: 08:00-15:30", "Vi: 08:00-15:00"]}
    //         />
    //     );
    // });
});
