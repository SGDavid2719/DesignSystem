import { MenuLink } from "./MenuLink";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Button", () => {
    it("debería renderizar una sublista con 2 enlaces al hacer hover", () => {
        render(
            <MenuLink
                href="string1"
                rel="next"
                ariaLabel="ariaLabel"
                mainText="MainText"
                subText="SubText"
                subSections={[
                    {
                        href: "string2",
                        rel: "next",
                        ariaLabel: "ariaLabel",
                        children: "string1",
                    },
                    {
                        href: "string3",
                        rel: "next",
                        ariaLabel: "ariaLabel",
                        children: "string2",
                    },
                ]}
            />
        );
        const mainRedirect = screen.getByText("MainText");
        const noHoverRedirects = document.querySelectorAll("a");
        expect(noHoverRedirects.length).toBe(1);
        fireEvent.mouseOver(mainRedirect);
        const hoverRedirects = document.querySelectorAll("a");
        expect(hoverRedirects.length).toBe(3);
    });
});
