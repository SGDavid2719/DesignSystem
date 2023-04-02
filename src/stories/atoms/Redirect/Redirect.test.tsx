import { render, screen } from "@testing-library/react";

import { Redirect } from "./Redirect";

describe("Image", () => {
    it("debería renderizar un elemento a", () => {
        render(
            <Redirect href="" rel="next" ariaLabel="">
                Children
            </Redirect>
        );
        expect(screen.getByRole("link")).toBeInTheDocument();
    });

    it("debería especificar la relación con el documento", () => {
        render(
            <Redirect href="" rel="next" ariaLabel="">
                Children
            </Redirect>
        );
        expect(screen.getByRole("link")).toHaveAttribute("rel", "next");
    });

    it("debería especificar el atributo `aria-label`", () => {
        render(
            <Redirect href="" rel="next" ariaLabel="aria-label">
                Children
            </Redirect>
        );
        expect(screen.getByRole("link")).toHaveAttribute(
            "aria-label",
            "aria-label"
        );
    });

    it("debería renderizar el contenido", () => {
        render(
            <Redirect href="" rel="next" ariaLabel="">
                Children
            </Redirect>
        );
        expect(screen.getByText("Children")).toBeInTheDocument();
    });
});
