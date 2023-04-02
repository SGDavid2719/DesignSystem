import { IconLink } from "./IconLink";
import { render, screen } from "@testing-library/react";

describe("IconLink", () => {
    it("debería renderizar un icono dentro de un enlace", () => {
        render(
            <IconLink href="href" ariaLabel="home" iconId="home" rel="next" />
        );
        expect(screen.getByRole("link")).toBeInTheDocument();
        expect(screen.getByRole("graphics-symbol")).toBeInTheDocument();
    });
});
