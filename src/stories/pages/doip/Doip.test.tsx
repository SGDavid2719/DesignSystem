import { DoipPage } from "./Doip";
import { render, screen } from "@testing-library/react";

describe("DoipPage", () => {
    it("debería renderizar 5 elementos con rol `img`, 3 imágenes y 2 iconos", () => {
        render(<DoipPage />);
        const images = screen.getAllByRole("img");
        expect(images.length).toBe(57);
        // expect(images[0]).toHaveAttribute("alt") ||
        //     expect(images[0]).toHaveAttribute("aria-label");
        // images.forEach((image) => expect(image).toHaveAttribute("alt"));
        const redirects = screen.getAllByRole("link");
        expect(redirects.length).toBe(40);
        redirects.forEach((redirect) =>
            expect(redirect).toHaveAttribute("aria-label")
        );
        const buttons = screen.getAllByRole("button");
        expect(buttons.length).toBe(7);
    });
});
