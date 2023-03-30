import { render, screen } from "@testing-library/react";

import { Icon } from "./Icon";

describe("Icon", () => {
    it("debería renderizar un elemento svg", () => {
        render(<Icon iconId="add" />);
        expect(screen.getByRole("img")).toBeInTheDocument();
    });
});
