import { LinksList } from "./LinksList";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
    it("debería renderizar 3 enlaces", () => {
        render(
            <LinksList
                links={[
                    {
                        href: "string1",
                        rel: "next",
                        children: "Aviso legal",
                        ariaLabel: "Aviso legal",
                    },
                    {
                        href: "string2",
                        rel: "next",
                        children: "Política de privacidad",
                        ariaLabel: "Política de privacidad",
                    },
                    {
                        href: "string3",
                        rel: "next",
                        children: "Mapa de contenidos",
                        ariaLabel: "Mapa de contenidos",
                    },
                ]}
            />
        );
        const redirects = document.querySelectorAll("a");
        expect(redirects.length).toBe(3);
    });
});
