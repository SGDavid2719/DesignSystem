import { NavBar } from "./NavBar";
import { fireEvent, render, screen } from "@testing-library/react";

describe("NavBar", () => {
    it("debería renderizar 7 elementos con rol 'link' al inicio, 35 al hacer click en el botón, y 7 al hacer click fuera", () => {
        render(
            <NavBar
                mainLinks={[
                    {
                        href: "link1",
                        rel: "next",
                        ariaLabel: "link1",
                        mainText: "Deporte",
                        subText: "a la UIB",
                        subSections: [
                            {
                                href: "string1",
                                rel: "next",
                                ariaLabel: "ariaLabel",
                                children: "string1",
                            },
                            {
                                href: "string2",
                                rel: "next",
                                ariaLabel: "ariaLabel",
                                children: "string2",
                            },
                        ],
                    },
                    {
                        href: "link2",
                        rel: "next",
                        ariaLabel: "link2",
                        mainText: "Residencia",
                        subText: "de Estudiants",
                        subSections: [
                            {
                                href: "string3",
                                rel: "next",
                                ariaLabel: "ariaLabel",
                                children: "string3",
                            },
                            {
                                href: "string4",
                                rel: "next",
                                ariaLabel: "ariaLabel",
                                children: "string4",
                            },
                        ],
                    },
                    {
                        href: "link3",
                        rel: "next",
                        ariaLabel: "link3",
                        mainText: "OTRI",
                        subText: "y Proyectos",
                        subSections: [
                            {
                                href: "string5",
                                rel: "next",
                                ariaLabel: "ariaLabel",
                                children: "string5",
                            },
                            {
                                href: "string6",
                                rel: "next",
                                ariaLabel: "ariaLabel",
                                children: "string6",
                            },
                        ],
                    },
                    {
                        href: "link4",
                        rel: "next",
                        ariaLabel: "link4",
                        mainText: "UIBCongrés",
                        subText: "Events Management",
                        subSections: [
                            {
                                href: "string7",
                                rel: "next",
                                ariaLabel: "ariaLabel",
                                children: "string7",
                            },
                            {
                                href: "string8",
                                rel: "next",
                                ariaLabel: "ariaLabel",
                                children: "string8",
                            },
                        ],
                    },
                    {
                        href: "link5",
                        rel: "next",
                        ariaLabel: "link5",
                        mainText: "Orientación",
                        subText: "e Inserción Profesional",
                        subSections: [
                            {
                                href: "string9",
                                rel: "next",
                                ariaLabel: "ariaLabel",
                                children: "string9",
                            },
                            {
                                href: "string10",
                                rel: "next",
                                ariaLabel: "ariaLabel",
                                children: "string10",
                            },
                        ],
                    },
                    {
                        href: "link6",
                        rel: "next",
                        ariaLabel: "link6",
                        mainText: "UIBdigital",
                        subText: "acceso usuarios",
                        subSections: [
                            {
                                href: "string11",
                                rel: "next",
                                ariaLabel: "ariaLabel",
                                children: "string11",
                            },
                            {
                                href: "string12",
                                rel: "next",
                                ariaLabel: "ariaLabel",
                                children: "string12",
                            },
                        ],
                    },
                    {
                        href: "link7",
                        rel: "next",
                        ariaLabel: "link7",
                        mainText: "UIBdigital",
                        subText: "acceso usuarios",
                        subSections: [
                            {
                                href: "string13",
                                rel: "next",
                                ariaLabel: "ariaLabel",
                                children: "string13",
                            },
                            {
                                href: "string14",
                                rel: "next",
                                ariaLabel: "ariaLabel",
                                children: "string14",
                            },
                        ],
                    },
                ]}
                sections={[
                    {
                        title: "Universitaris",
                        sectionLinks: [
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
                            {
                                href: "link7",
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
                            {
                                href: "link7",
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
                            {
                                href: "link7",
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
                            {
                                href: "link7",
                                rel: "next",
                                ariaLabel: "link7",
                                mainText: "UIBdigital",
                                subText: "acceso usuarios",
                            },
                        ],
                    },
                ]}
            />
        );
        expect(screen.getByTestId("overlays")).toBeInTheDocument();
        const firstButton = screen.getAllByRole("button");
        expect(firstButton[0]).toBeInTheDocument();
        expect(screen.queryAllByRole("link").length).toBe(7);
        fireEvent.click(firstButton[0]);
        const secondButton = screen.getByText("MENÚ");
        expect(secondButton).toBeInTheDocument();
        fireEvent.click(secondButton);
        expect(screen.getAllByRole("link").length).toBe(35);
        fireEvent.click(secondButton);
        expect(screen.queryAllByRole("link").length).toBe(7);
    });
});
