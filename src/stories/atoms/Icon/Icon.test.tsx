import { render, screen } from "@testing-library/react";

import { Icon } from "./Icon";

describe("Icon", () => {
    it("debería renderizar un elemento svg", () => {
        render(<Icon iconId="add" />);
        expect(screen.getByRole("graphics-symbol")).toBeInTheDocument();
    });

    it("debería contener el rol `img` y el atributo `aria-label`", () => {
        render(<Icon iconId="add" />);
        expect(screen.getByRole("graphics-symbol")).toBeInTheDocument();
        expect(screen.getByRole("graphics-symbol")).toHaveAttribute(
            "aria-label"
        );
    });
});
