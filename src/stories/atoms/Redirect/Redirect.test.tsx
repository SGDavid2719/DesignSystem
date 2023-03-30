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

    it("debería renderizar el contenido", () => {
        render(
            <Redirect href="" rel="next" ariaLabel="">
                Children
            </Redirect>
        );
        expect(screen.getByText("Children")).toBeInTheDocument();
    });
});
