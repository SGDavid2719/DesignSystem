import { HiddenMenu } from "./HiddenMenu";
import { render, screen, fireEvent } from "@testing-library/react";

describe("HiddenMenu", () => {
    it("debería renderizar 0 elementos con rol `link`, hacer click, y mostrar 6 elementos con rol `link`", () => {
        render(
            <HiddenMenu
                menuLinks={[
                    {
                        href: "link1",
                        rel: "next",
                        ariaLabel: "link1",
                        mainText: "Deporte",
                        subText: "a la UIB",
                    },
                    {
                        href: "link2",
                        rel: "next",
                        ariaLabel: "link2",
                        mainText: "Residencia",
                        subText: "de Estudiants",
                    },
                    {
                        href: "link3",
                        rel: "next",
                        ariaLabel: "link3",
                        mainText: "OTRI",
                        subText: "y Proyectos",
                    },
                    {
                        href: "link4",
                        rel: "next",
                        ariaLabel: "link4",
                        mainText: "UIBCongrés",
                        subText: "Events Management",
                    },
                    {
                        href: "link5",
                        rel: "next",
                        ariaLabel: "link5",
                        mainText: "Orientación",
                        subText: "e Inserción Profesional",
                    },
                    {
                        href: "link6",
                        rel: "next",
                        ariaLabel: "link6",
                        mainText: "UIBdigital",
                        subText: "acceso usuarios",
                    },
                ]}
            />
        );
        expect(screen.queryAllByRole("link").length).toBe(0);
        expect(screen.getByRole("button")).toBeInTheDocument();
        const button = screen.getByRole("button");
        fireEvent.click(button);
        expect(screen.getAllByRole("link").length).toBe(6);
    });
});
