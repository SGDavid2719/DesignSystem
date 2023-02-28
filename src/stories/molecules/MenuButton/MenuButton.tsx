import { useState } from "react";
import { Button } from "../../atoms/button/Button";
import { MenuLink, MenuLinkProps } from "../menuLink/MenuLink";
import ReactDOM from "react-dom";

export interface Section {
    title: string;
    sectionLinks: MenuLinkProps[];
}

interface MenuButtonProps {
    sections: Section[];
}

export const MenuButton: React.FC<MenuButtonProps> = ({ sections }) => {
    const [showMenu, setShowMenu] = useState(false);

    const portalElement = document.getElementById("overlays");

    return (
        <>
            <Button
                label="MENÚ"
                renderIcon="menu"
                align="start"
                onClick={() => setShowMenu((prevState) => !prevState)}
                btnClassName={"text-xl hover:text-blue-600 focus:text-blue-600"}
            />
            {showMenu &&
                ReactDOM.createPortal(
                    <div className="mt-2 border grid grid-cols-4 bg-white m-6 p-2">
                        {sections.map((section) => {
                            const { title, sectionLinks } = section;

                            return (
                                <div className="p-4" key={title}>
                                    <h1 className="uppercaset text-2xl text-blue-600 font-light mb-1">
                                        {title}
                                    </h1>
                                    <ul>
                                        {sectionLinks.map((sectionLink) => {
                                            const {
                                                href,
                                                ariaLabel,
                                                mainText,
                                                subText,
                                            } = sectionLink;

                                            return (
                                                <li className="mb-1" key={href}>
                                                    <MenuLink
                                                        href={href}
                                                        ariaLabel={ariaLabel}
                                                        mainText={mainText}
                                                        subText={subText}
                                                        menuLinkClassName="flex align-baseline"
                                                    />
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>,
                    portalElement!
                )}
        </>
    );
};
