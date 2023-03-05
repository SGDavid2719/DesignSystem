import { useState } from "react";
import { Button } from "../../atoms/button/Button";
import { MenuLink, MenuLinkProps } from "../../molecules/menuLink/MenuLink";

interface HiddenMenuProps {
    menuLinks: MenuLinkProps[];
}
export const HiddenMenu = ({ menuLinks }: HiddenMenuProps) => {
    const [openned, setOppened] = useState(false);

    return (
        <div>
            {openned && (
                <ul
                    className={[
                        "bg-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
                        "border-b",
                        "gap-2",
                        "p-[1rem]",
                    ].join(" ")}
                >
                    {menuLinks.map((menuLink) => {
                        const { href, ariaLabel, mainText, subText } = menuLink;
                        return (
                            <li key={href}>
                                <MenuLink
                                    href={href}
                                    ariaLabel={ariaLabel}
                                    mainText={mainText}
                                    subText={subText}
                                    menuLinkClassName="bg-[#f6f6f6] p-[0.75rem] w-full"
                                />
                            </li>
                        );
                    })}
                </ul>
            )}
            <div className="flex justify-end">
                <Button
                    label="FUEIB"
                    renderIcon="add"
                    align="start"
                    onClick={() => setOppened((prevState) => !prevState)}
                    btnClassName={
                        "bg-white border-b border-l border-r text-[#555] hover:font-bold hover:text-black w-[6rem] justify-center mr-12"
                    }
                />
            </div>
        </div>
    );
};
