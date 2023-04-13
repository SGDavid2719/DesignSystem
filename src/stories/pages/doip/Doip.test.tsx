import { DoipPage } from "./Doip";
import { render, screen } from "@testing-library/react";

describe("DoipPage", () => {
    it("debería renderizar 7 elementos con rol `img`, 48 con rol `graphics-symbol`, 40 con rol `link` y 7 con rol `button`", () => {
        render(<DoipPage />);
        const images = screen.getAllByRole("img");
        expect(images.length).toBe(9);
        const icons = screen.getAllByRole("graphics-symbol");
        expect(icons.length).toBe(48);
        const redirects = screen.getAllByRole("link");
        expect(redirects.length).toBe(38);
        redirects.forEach((redirect) =>
            expect(redirect).toHaveAttribute("aria-label")
        );
        const buttons = screen.getAllByRole("button");
        expect(buttons.length).toBe(9);
    });
});
