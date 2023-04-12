import { Label } from "./Label";
import { render, screen } from "@testing-library/react";

describe("Label", () => {
    it("debería renderizar un elemento con el texto 'Label'", () => {
        render(
            <>
                <Label text="Label" htmlFor="test" /> <input id="test" />
            </>
        );
        expect(screen.getByLabelText("Label")).toBeInTheDocument();
    });
});
