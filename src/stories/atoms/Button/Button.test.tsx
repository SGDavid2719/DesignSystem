import { Button } from "./Button";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Button", () => {
    it("debería renderizar un elemento con el rol de botón", () => {
        render(<Button />);
        expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("debería poder utilizar mi propia clase", () => {
        render(<Button btnClassName="bg-blue" />);
        expect(screen.getByRole("button")).toHaveClass("bg-blue");
    });

    it("debería estar el botón como deshabilitado", () => {
        render(<Button disabled />);
        expect(screen.getByRole("button")).toHaveAttribute("disabled");
    });

    test.each(["button", "submit", "reset"] as (
        | "button"
        | "reset"
        | "submit"
    )[])(
        "debería soportar cambiar el tipo de botón a través de `type`",
        (type) => {
            render(<Button type={type} />);
            expect(screen.getByRole("button")).toHaveAttribute("type", type);
        }
    );

    it("llama onClick handler al hacer click", () => {
        const onClick = jest.fn();
        render(<Button label="Click me!" onClick={onClick} />);
        fireEvent.click(screen.getByRole("button"));
        expect(onClick).toHaveBeenCalled();
    });

    it("debería no haber `aria-expanded` si el role es `switch`", () => {
        render(<Button role="switch" />);
        expect(screen.getByRole("switch")).not.toHaveAttribute("ariaExpanded");
    });

    describe("Botón con la variante de icono", () => {
        it("debería renderizar el icono dentro del botón", () => {
            render(<Button renderIcon="add" />);
            expect(screen.getByRole("button")).toBeInTheDocument();
        });

        it("debería renderizar el icono al principio", () => {
            render(<Button renderIcon="add" align="start" />);
            expect(screen.getByRole("button")).toHaveClass("flex-row-reverse");
        });
    });
});
