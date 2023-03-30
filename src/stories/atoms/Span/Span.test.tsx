import { render, screen } from "@testing-library/react";

describe("Image", () => {
    it("debería renderizar un elemento span", () => {
        render(<span>Span</span>);
        expect(screen.getByText("Span")).toBeInTheDocument();
    });

    it("debería poder especificar el estilo", () => {
        render(<span className={["bg-blue"].join(" ")}>Span</span>);
        expect(screen.getByText("Span")).toHaveClass("bg-blue");
    });
});
