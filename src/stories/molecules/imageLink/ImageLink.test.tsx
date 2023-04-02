import { ImageLink } from "./ImageLink";
import { render, screen } from "@testing-library/react";

describe("ImageLink", () => {
    it("debería renderizar una imagen dentro de un enlace", () => {
        render(
            <ImageLink href="href" ariaLabel="home" rel="next" src="" alt="" />
        );
        expect(screen.getByRole("link")).toBeInTheDocument();
        expect(screen.getByRole("img")).toBeInTheDocument();
    });
});
