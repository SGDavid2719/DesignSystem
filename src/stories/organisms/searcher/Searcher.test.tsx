import { Searcher } from "./Searcher";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Searcher", () => {
    it("debería renderizar un elemento con una etiqueta 'Searcher'", () => {
        render(
            <Searcher
                name="test"
                htmlFor="test"
                text="Searcher"
                placeholder="Searcher"
            />
        );
        expect(screen.getByPlaceholderText("Searcher")).toBeInTheDocument();
    });

    it("debería renderizar dos botones", () => {
        render(<Searcher name="test" htmlFor="test" text="Searcher" />);
        expect(screen.getAllByRole("button").length).toBe(2);
    });

    it("llama onClick handler al hacer click en el botón de búsqueda", () => {
        render(<Searcher name="test" htmlFor="test" text="Searcher" />);
        fireEvent.click(screen.getAllByRole("button")[0]);
    });
});
