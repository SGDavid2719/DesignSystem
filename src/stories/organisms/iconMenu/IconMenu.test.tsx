import { IconMenu } from "./IconMenu";
import { render, screen } from "@testing-library/react";

describe("IconMenu", () => {
    it("debería renderizar 6 elementos con rol `link` y 6 con rol `graphics-symbol`", () => {
        render(
            <IconMenu
                iconLinks={[
                    {
                        href: "link1",
                        rel: "next",
                        ariaLabel: "link1",
                        iconId: "home",
                    },
                    {
                        href: "link2",
                        rel: "next",
                        ariaLabel: "link2",
                        iconId: "magnifying-glass",
                    },
                    {
                        href: "link3",
                        rel: "next",
                        ariaLabel: "link3",
                        iconId: "facebook",
                    },
                    {
                        href: "link4",
                        rel: "next",
                        ariaLabel: "link4",
                        iconId: "twitter",
                    },
                    {
                        href: "link5",
                        rel: "next",
                        ariaLabel: "link5",
                        iconId: "youtube",
                    },
                    {
                        href: "link6",
                        rel: "next",
                        ariaLabel: "link6",
                        iconId: "instagram",
                    },
                ]}
            />
        );
        expect(screen.getAllByRole("link").length).toBe(6);
        expect(screen.getAllByRole("graphics-symbol").length).toBe(6);
    });
});
