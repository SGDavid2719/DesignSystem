import { render, screen, fireEvent } from "@testing-library/react";
import { Backdrop } from "./Backdrop";

describe("Backdrop", () => {
    it("debería renderizar un elemento div", () => {
        render(<Backdrop onOutsideClick={() => {}} />);
        expect(screen.getByTestId("backdrop")).toBeInTheDocument();
    });

    it("debería ocupar toda la pantalla", () => {
        render(<Backdrop onOutsideClick={() => {}} />);
        expect(screen.getByTestId("backdrop")).toHaveClass("h-screen");
    });

    it("debería poder utilizar mi propia clase", () => {
        render(
            <Backdrop onOutsideClick={() => {}} backdropClassName="bg-blue" />
        );
        expect(screen.getByTestId("backdrop")).toHaveClass("bg-blue");
    });

    it("llama onClick handler al hacer click", () => {
        const onClick = jest.fn();
        render(<Backdrop onOutsideClick={onClick} />);
        fireEvent.click(screen.getByTestId("backdrop"));
        expect(onClick).toHaveBeenCalled();
    });
});
