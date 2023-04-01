import { MenuButton } from "./MenuButton";
import { fireEvent, render, screen } from "@testing-library/react";

describe("MenuButton", () => {
    it("debería renderizar 0 elementos con rol 'link' al inicio, 28 al hacer click en el botón, y 0 al hacer click fuera", () => {
        render(
            <MenuButton
                sections={[
                    {
                        title: "Universitaris",
                        sectionLinks: [
                            {
                                href: "/?path=/story/pages-notfoundpage--default",
                                rel: "next",
                                ariaLabel: "link1",
                                mainText: "Deporte",
                                subText: "a la UIB",
                            },
                            {
                                href: "/?path=/story/pages-notfoundpage--default",
                                rel: "next",
                                ariaLabel: "link2",
                                mainText: "Residencia",
                                subText: "de Estudiants",
                            },
                            {
                                href: "/?path=/story/pages-notfoundpage--default",
                                rel: "next",
                                ariaLabel: "link3",
                                mainText: "OTRI",
                                subText: "y Proyectos",
                            },
                            {
                                href: "/?path=/story/pages-notfoundpage--default",
                                rel: "next",
                                ariaLabel: "link4",
                                mainText: "UIBCongrés",
                                subText: "Events Management",
                            },
                            {
                                href: "/?path=/story/pages-notfoundpage--default",
                                rel: "next",
                                ariaLabel: "link5",
                                mainText: "Orientación",
                                subText: "e Inserción Profesional",
                            },
                            {
                                href: "/?path=/story/pages-notfoundpage--default",
                                rel: "next",
                                ariaLabel: "link6",
                                mainText: "UIBdigital",
                                subText: "acceso usuarios",
                            },
                            {
                                href: "/?path=/story/pages-notfoundpage--default",
                                rel: "next",
                                ariaLabel: "link7",
                                mainText: "UIBdigital",
                                subText: "acceso usuarios",
                            },
                        ],
                    },
                    {
                        title: "Universitaris",
                        sectionLinks: [
                            {
                                href: "/?path=/story/pages-notfoundpage--default",
                                rel: "next",
                                ariaLabel: "link1",
                                mainText: "Deporte",
                                subText: "a la UIB",
                            },
                            {
                                href: "/?path=/story/pages-notfoundpage--default",
                                rel: "next",
                                ariaLabel: "link2",
                                mainText: "Residencia",
                                subText: "de Estudiants",
                            },
                            {
                                href: "/?path=/story/pages-notfoundpage--default",
                                rel: "next",
                                ariaLabel: "link3",
                                mainText: "OTRI",
                                subText: "y Proyectos",
                            },
                            {
                                href: "/?path=/story/pages-notfoundpage--default",
                                rel: "next",
                                ariaLabel: "link4",
                                mainText: "UIBCongrés",
                                subText: "Events Management",
                            },
                            {
                                href: "/?path=/story/pages-notfoundpage--default",
                                rel: "next",
                                ariaLabel: "link5",
                                mainText: "Orientación",
                                subText: "e Inserción Profesional",
                            },
                            {
                                href: "/?path=/story/pages-notfoundpage--default",
                                rel: "next",
                                ariaLabel: "link6",
                                mainText: "UIBdigital",
                                subText: "acceso usuarios",
                            },
                            {
                                href: "/?path=/story/pages-notfoundpage--default",
                                rel: "next",
                                ariaLabel: "link7",
                                mainText: "UIBdigital",
                                subText: "acceso usuarios",
                            },
                        ],
                    },
                    {
                        title: "Universitaris",
                        sectionLinks: [
                            {
                                href: "/?path=/story/pages-notfoundpage--default",
                                rel: "next",
                                ariaLabel: "link1",
                                mainText: "Deporte",
                                subText: "a la UIB",
                            },
                            {
                                href: "/?path=/story/pages-notfoundpage--default",
                                rel: "next",
                                ariaLabel: "link2",
                                mainText: "Residencia",
                                subText: "de Estudiants",
                            },
                            {
                                href: "/?path=/story/pages-notfoundpage--default",
                                rel: "next",
                                ariaLabel: "link3",
                                mainText: "OTRI",
                                subText: "y Proyectos",
                            },
                            {
                                href: "/?path=/story/pages-notfoundpage--default",
                                rel: "next",
                                ariaLabel: "link4",
                                mainText: "UIBCongrés",
                                subText: "Events Management",
                            },
                            {
                                href: "/?path=/story/pages-notfoundpage--default",
                                rel: "next",
                                ariaLabel: "link5",
                                mainText: "Orientación",
                                subText: "e Inserción Profesional",
                            },
                            {
                                href: "/?path=/story/pages-notfoundpage--default",
                                rel: "next",
                                ariaLabel: "link6",
                                mainText: "UIBdigital",
                                subText: "acceso usuarios",
                            },
                            {
                                href: "/?path=/story/pages-notfoundpage--default",
                                rel: "next",
                                ariaLabel: "link7",
                                mainText: "UIBdigital",
                                subText: "acceso usuarios",
                            },
                        ],
                    },
                    {
                        title: "Universitaris",
                        sectionLinks: [
                            {
                                href: "/?path=/story/pages-notfoundpage--default",
                                rel: "next",
                                ariaLabel: "link1",
                                mainText: "Deporte",
                                subText: "a la UIB",
                            },
                            {
                                href: "/?path=/story/pages-notfoundpage--default",
                                rel: "next",
                                ariaLabel: "link2",
                                mainText: "Residencia",
                                subText: "de Estudiants",
                            },
                            {
                                href: "/?path=/story/pages-notfoundpage--default",
                                rel: "next",
                                ariaLabel: "link3",
                                mainText: "OTRI",
                                subText: "y Proyectos",
                            },
                            {
                                href: "/?path=/story/pages-notfoundpage--default",
                                rel: "next",
                                ariaLabel: "link4",
                                mainText: "UIBCongrés",
                                subText: "Events Management",
                            },
                            {
                                href: "/?path=/story/pages-notfoundpage--default",
                                rel: "next",
                                ariaLabel: "link5",
                                mainText: "Orientación",
                                subText: "e Inserción Profesional",
                            },
                            {
                                href: "/?path=/story/pages-notfoundpage--default",
                                rel: "next",
                                ariaLabel: "link6",
                                mainText: "UIBdigital",
                                subText: "acceso usuarios",
                            },
                            {
                                href: "/?path=/story/pages-notfoundpage--default",
                                rel: "next",
                                ariaLabel: "link7",
                                mainText: "UIBdigital",
                                subText: "acceso usuarios",
                            },
                        ],
                    },
                ]}
                test
            />
        );
        expect(screen.getByTestId("overlays")).toBeInTheDocument();
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
        expect(screen.queryAllByRole("link").length).toBe(0);
        fireEvent.click(button);
        expect(screen.getAllByRole("link").length).toBe(28);
        fireEvent.click(screen.getByTestId("backdrop"));
        expect(screen.queryAllByRole("link").length).toBe(0);
    });
});
