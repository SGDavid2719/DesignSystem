import { render, screen, fireEvent } from "@testing-library/react";

describe("Backdrop", () => {
    it("debería renderizar un elemento div", () => {
        render(
            <div
                className={["h-screen w-full fixed left-0 top-0"].join(" ")}
                onClick={() => {}}
                data-testid="t1"
            />
        );
        expect(screen.getByTestId("t1")).toBeInTheDocument();
    });

    it("debería ocupar toda la pantalla", () => {
        render(
            <div
                className={["h-screen w-full fixed left-0 top-0"].join(" ")}
                onClick={() => {}}
                data-testid="t2"
            />
        );
        expect(screen.getByTestId("t2")).toHaveClass("h-screen");
    });

    it("debería poder utilizar mi propia clase", () => {
        render(
            <div
                className={[
                    "h-screen w-full fixed left-0 top-0",
                    "bg-blue",
                ].join(" ")}
                onClick={() => {}}
                data-testid="t3"
            />
        );
        expect(screen.getByTestId("t3")).toHaveClass("bg-blue");
    });

    it("llama onClick handler al hacer click", () => {
        const onClick = jest.fn();
        render(
            <div
                className={[
                    "h-screen w-full fixed left-0 top-0",
                    "bg-blue",
                ].join(" ")}
                onClick={onClick}
                data-testid="t4"
            />
        );
        fireEvent.click(screen.getByTestId("t4"));
        expect(onClick).toHaveBeenCalled();
    });
});
