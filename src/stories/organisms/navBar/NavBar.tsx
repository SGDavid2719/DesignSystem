import { MenuButton, Section } from "../../molecules/menuButton/MenuButton";
import { MenuLink, MenuLinkProps } from "../../molecules/menuLink/MenuLink";

interface NavBarProps {
    mainLinks: MenuLinkProps[];
    sections: Section[];
}
export const NavBar = ({ mainLinks, sections }: NavBarProps) => {
    return (
        <>
            <ul className={["grid grid-cols-8 gap-2"].join(" ")}>
                {mainLinks.map((menuLink) => {
                    const { href, ariaLabel, mainText, subText, subSections } =
                        menuLink;
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
                <li className="mt-4">
                    <MenuButton sections={sections} />
                </li>
            </ul>
            <div id="overlays" />
        </>
    );
};
