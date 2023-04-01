import { Time } from "./Time";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
    it("debería renderizar un componente time", () => {
        render(<Time dateTime={new Date(2020, 4, 20)} />);
        const time = document.querySelector("time");
        expect(time).toBeInTheDocument();
    });

    it("debería renderizar el nombre, el lugar, el número de teléfono y el correo", () => {
        render(<Time dateTime={new Date(2020, 4, 20)} />);
        const time = document.querySelector("time");
        expect(time).toHaveAttribute("dateTime", "2020-05-19T22:00:00.000Z");
    });

    it("debería renderizar un contenedor en líea con el texto 3 y con el texto may", () => {
        render(<Time dateTime={new Date(2020, 4, 20)} />);
        expect(screen.queryByText("3")).toBeInTheDocument();
        expect(screen.queryByText("May")).toBeInTheDocument();
    });
});
