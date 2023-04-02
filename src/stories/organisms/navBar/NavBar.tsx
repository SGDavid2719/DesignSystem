import { useState } from "react";
import { Button } from "../../atoms/button/Button";
import { MenuButton, Section } from "../menuButton/MenuButton";
import { MenuLink, MenuLinkProps } from "../../molecules/menuLink/MenuLink";
interface NavBarProps {
    /**
     * Propiedad obligatoria para indicar los enlaces principales con sus propiedades pertinentes.
     */
    mainLinks: MenuLinkProps[];
    /**
     * Propiedad obligatoria para indicar las secciones del menú con sus propiedades pertinentes.
     */
    sections: Section[];
}
export const NavBar = ({ mainLinks, sections }: NavBarProps) => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <div className="flex justify-end lg:hidden">
                <Button
                    renderIcon="menu"
                    align="start"
                    onClick={() => setShowMenu((prevState) => !prevState)}
                    btnClassName={
                        "mr-2 hover:text-blue-600 focus:text-blue-600"
                    }
                    iconClassName="h-10 w-7"
                />
            </div>
            <nav className={`${showMenu ? "block" : "hidden"} lg:block`}>
                <ul className={[`inline-block`, "gap-2", "lg:flex"].join(" ")}>
                    {mainLinks.map((menuLink, menuLinkIndex) => {
                        const {
                            href,
                            ariaLabel,
                            mainText,
                            subText,
                            subSections,
                            rel,
                        } = menuLink;
                        return (
                            <li key={`${menuLinkIndex}${href}`}>
                                <MenuLink
                                    rel={rel}
                                    href={href}
                                    ariaLabel={ariaLabel}
                                    mainText={mainText}
                                    subText={subText}
                                    subSections={subSections}
                                    redirectClassName="p-[0.75rem] uppercase"
                                />
                            </li>
                        );
                    })}
                    <li className="mt-4">
                        <MenuButton sections={sections} />
                    </li>
                </ul>
            </nav>
            <div
                id="overlays"
                data-testid="overlays"
                className="z-10 relative"
            />
        </>
    );
};
