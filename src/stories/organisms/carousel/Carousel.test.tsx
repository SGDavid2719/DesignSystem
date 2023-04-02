import { Carousel } from "./Carousel";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Carousel", () => {
    it("debería renderizar 5 elementos con rol `img`, 3 imágenes y 2 iconos", () => {
        render(
            <Carousel
                carouselImages={[
                    {
                        href: "href",
                        rel: "next",
                        ariaLabel: "logo",
                        src: "./assets/logo.png",
                        alt: "logo",
                    },
                    {
                        href: "href",
                        rel: "next",
                        ariaLabel: "logo",
                        src: "./assets/departOrient.png",
                        alt: "logo",
                    },
                    {
                        href: "href",
                        rel: "next",
                        ariaLabel: "logo",
                        src: "./assets/tableroOfertas.png",
                        alt: "logo",
                    },
                ]}
            />
        );
        expect(screen.getAllByRole("graphics-symbol").length).toBe(2);
        expect(screen.getAllByRole("img").length).toBe(3);
    });

    it("debería renderizar 3 elementos con rol `link`", () => {
        render(
            <Carousel
                carouselImages={[
                    {
                        href: "href",
                        rel: "next",
                        ariaLabel: "logo",
                        src: "./assets/logo.png",
                        alt: "logo",
                    },
                    {
                        href: "href",
                        rel: "next",
                        ariaLabel: "logo",
                        src: "./assets/departOrient.png",
                        alt: "logo",
                    },
                    {
                        href: "href",
                        rel: "next",
                        ariaLabel: "logo",
                        src: "./assets/tableroOfertas.png",
                        alt: "logo",
                    },
                ]}
            />
        );
        expect(screen.getAllByRole("link").length).toBe(3);
    });

    it("debería renderizar 2 elementos con rol `button`", () => {
        render(
            <Carousel
                carouselImages={[
                    {
                        href: "href",
                        rel: "next",
                        ariaLabel: "logo",
                        src: "./assets/logo.png",
                        alt: "logo",
                    },
                    {
                        href: "href",
                        rel: "next",
                        ariaLabel: "logo",
                        src: "./assets/departOrient.png",
                        alt: "logo",
                    },
                    {
                        href: "href",
                        rel: "next",
                        ariaLabel: "logo",
                        src: "./assets/tableroOfertas.png",
                        alt: "logo",
                    },
                ]}
            />
        );
        expect(screen.getAllByRole("button").length).toBe(2);
    });

    it("llama onClick handler al hacer click de ambos botones", () => {
        render(
            <Carousel
                carouselImages={[
                    {
                        href: "href1",
                        rel: "next",
                        ariaLabel: "logo1",
                        src: "./assets/logo.png",
                        alt: "logo1",
                    },
                    {
                        href: "href2",
                        rel: "next",
                        ariaLabel: "logo2",
                        src: "./assets/departOrient.png",
                        alt: "logo2",
                    },
                    {
                        href: "href3",
                        rel: "next",
                        ariaLabel: "logo3",
                        src: "./assets/tableroOfertas.png",
                        alt: "logo3",
                    },
                ]}
            />
        );
        fireEvent.click(screen.getAllByRole("button")[0]);
        expect(screen.getAllByRole("link").length).toBe(3);
        fireEvent.click(screen.getAllByRole("button")[1]);
        expect(screen.getAllByRole("link").length).toBe(3);
    });

    it("hacer click en ambos botones hasta dar la vuelta", () => {
        render(
            <Carousel
                carouselImages={[
                    {
                        href: "href",
                        rel: "next",
                        ariaLabel: "logo",
                        src: "./assets/logo.png",
                        alt: "logo",
                    },
                    {
                        href: "href",
                        rel: "next",
                        ariaLabel: "logo",
                        src: "./assets/departOrient.png",
                        alt: "logo",
                    },
                    {
                        href: "href",
                        rel: "next",
                        ariaLabel: "logo",
                        src: "./assets/tableroOfertas.png",
                        alt: "logo",
                    },
                ]}
            />
        );
        fireEvent.click(screen.getAllByRole("button")[0]);
        fireEvent.click(screen.getAllByRole("button")[0]);
        fireEvent.click(screen.getAllByRole("button")[0]);
        fireEvent.click(screen.getAllByRole("button")[1]);
        expect(screen.getAllByRole("link").length).toBe(3);
    });
});
