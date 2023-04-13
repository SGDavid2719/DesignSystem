import { Input } from "./Input";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Input", () => {
    it("debería renderizar un elemento de tipo 'text'", () => {
        render(<Input name="test" placeholder="Input" />);
        expect(screen.getByPlaceholderText("Input")).toBeInTheDocument();
    });

    it("debería cambiar el valor", () => {
        render(<Input name="test" placeholder="Input" value="test" />);
        const input = screen.getByLabelText("test") as HTMLInputElement;
        fireEvent.change(input, {
            target: { value: "test2" },
        });
        expect(input.value).toBe("test2");
    });
});
