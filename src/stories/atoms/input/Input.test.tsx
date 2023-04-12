import { Input } from "./Input";
import { render, screen } from "@testing-library/react";

describe("Input", () => {
    it("debería renderizar un elemento de tipo 'text'", () => {
        render(<Input name="test" placeholder="Input" />);
        expect(screen.getByPlaceholderText("Input")).toBeInTheDocument();
    });
});
