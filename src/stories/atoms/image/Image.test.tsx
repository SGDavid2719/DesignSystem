import { render, screen } from "@testing-library/react";

import { Image } from "./Image";

describe("Image", () => {
    it("debería renderizar un elemento img", () => {
        render(<Image src="" alt="" />);
        expect(screen.getByRole("img")).toBeInTheDocument();
    });

    it("debería poder utilizar mi propia clase", () => {
        render(<Image src="" alt="" imageClassName="w-full" />);
        expect(screen.getByRole("img")).toHaveClass("w-full");
    });

    it("debería tener la propiedad src igual a src", () => {
        render(<Image src="src" alt="" />);
        expect(screen.getByRole("img")).toHaveAttribute("src", "src");
    });
});
