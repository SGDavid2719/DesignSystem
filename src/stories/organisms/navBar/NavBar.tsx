import { useState } from "react";
import { Button } from "../../atoms/button/Button";
import { MenuButton, Section } from "../../molecules/menuButton/MenuButton";
import { MenuLink, MenuLinkProps } from "../../molecules/menuLink/MenuLink";
import { Backdrop } from "../../atoms/backdrop/Backdrop";

interface NavBarProps {
    mainLinks: MenuLinkProps[];
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
                    {mainLinks.map((menuLink) => {
                        const {
                            href,
                            ariaLabel,
                            mainText,
                            subText,
                            subSections,
                        } = menuLink;
                        return (
                            <li key={href}>
                                <MenuLink
                                    href={href}
                                    ariaLabel={ariaLabel}
                                    mainText={mainText}
                                    subText={subText}
                                    subSections={subSections}
                                    menuLinkClassName="p-[0.75rem] uppercase"
                                />
                            </li>
                        );
                    })}
                    {showMenu && (
                        <li className="mt-4">
                            <MenuButton sections={sections} />
                        </li>
                    )}
                </ul>
            </nav>
            {showMenu && <Backdrop onOutsideClick={() => setShowMenu(false)} />}
            <div id="overlays" />
        </>
    );
};
