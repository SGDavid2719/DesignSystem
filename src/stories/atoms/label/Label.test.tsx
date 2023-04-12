import { Label } from "./Label";
import { render, screen } from "@testing-library/react";

describe("Label", () => {
    it("debería renderizar un elemento con el texto 'Label'", () => {
        render(<Label text="Label" htmlFor="" />);
        expect(screen.getByText("Label")).toBeInTheDocument();
    });

    it("debería renderizar un elemento con el atributo 'htmlFor'", () => {
        render(<Label text="Label" htmlFor="htmlFor" />);
        expect(screen.getByText("Label")).toHaveAttribute("htmlFor", "htmlFor");
    });
});
