import { AccessibleInput } from "./AccessibleInput";
import { render, screen } from "@testing-library/react";

describe("AccessibleInput", () => {
    it("debería renderizar un elemento con una etiqueta 'AccessibleInput'", () => {
        render(
            <AccessibleInput
                name="test"
                htmlFor="test"
                text="AccessibleInput"
            />
        );
        expect(screen.getByLabelText("AccessibleInput")).toBeInTheDocument();
    });

    it("debería renderizar un elemento con el placeholder 'AccessibleInput'", () => {
        render(
            <AccessibleInput
                name="test"
                htmlFor="test"
                text="AccessibleInput"
                placeholder="AccessibleInput"
            />
        );
        expect(
            screen.getByPlaceholderText("AccessibleInput")
        ).toBeInTheDocument();
    });

    it("no debería renderizar un elemento con el placeholder 'AccessibleInput'", () => {
        render(
            <AccessibleInput
                name="test"
                htmlFor="test"
                text="AccessibleInput"
                placeholder="AccessibleInput"
                type="checkbox"
            />
        );
        expect(
            screen.queryByPlaceholderText("AccessibleInput")
        ).not.toBeInTheDocument();
    });
});
