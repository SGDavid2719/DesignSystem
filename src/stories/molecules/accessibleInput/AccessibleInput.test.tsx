import { AccessibleInput } from "./AccessibleInput";
import { render, screen } from "@testing-library/react";

describe("AccessibleInput", () => {
    it("debería renderizar un elemento con una etiqueta 'AccessibleInput'", () => {
        render(<AccessibleInput name="" htmlFor="" text="AccessibleInput" />);
        expect(screen.getAllByText("AccessibleInput")).toBeInTheDocument();
    });

    it("debería renderizar un elemento con el placeholder 'AccessibleInput'", () => {
        render(
            <AccessibleInput
                name=""
                htmlFor=""
                text="AccessibleInput"
                placeholder="AccessibleInput"
            />
        );
        expect(
            screen.getAllByPlaceholderText("AccessibleInput")
        ).toBeInTheDocument();
    });

    it("no debería renderizar un elemento con el placeholder 'AccessibleInput'", () => {
        render(
            <AccessibleInput
                name=""
                htmlFor=""
                text="AccessibleInput"
                placeholder="AccessibleInput"
                type="checkbox"
            />
        );
        expect(
            screen.getAllByPlaceholderText("AccessibleInput")
        ).not.toBeInTheDocument();
    });
});
