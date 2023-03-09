import { useState } from "react";
import { Redirect, RedirectProps } from "../../atoms/redirect/Redirect";
import { Span } from "../../atoms/span/Span";
import { Rel } from "../../../shared/types";

export interface MenuLinkProps {
    href: string;
    rel: Rel;
    ariaLabel: string;
    mainText: string;
    subText: string;
    menuLinkClassName?: string;
    subSections?: RedirectProps[];
}

export const MenuLink: React.FC<MenuLinkProps> = ({
    href,
    rel,
    ariaLabel,
    mainText,
    subText,
    menuLinkClassName,
    subSections,
}) => {
    const [mouseEnter, setMouseEnter] = useState(false);

    const onMouseEnter = () => {
        setMouseEnter(true);
    };

    const onMouseLeave = () => {
        setMouseEnter(false);
    };

    return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Redirect
                rel={rel}
                href={href}
                ariaLabel={ariaLabel}
                redirectClassName={[
                    "h-fit w-fit block",
                    menuLinkClassName,
                ].join(" ")}
            >
                <Span
                    children={mainText}
                    spanClassName={[
                        "text-xl block text-[#555] text-left lg:text-center",
                        `${mouseEnter && "text-blue-600"}`,
                    ].join(" ")}
                />
                <Span
                    children={subText}
                    spanClassName="text-xs block text-[#555] self-end mb-[3px] ml-1 text-left lg:text-center"
                />
            </Redirect>
            {subSections && mouseEnter && (
                <ul className=" lg:z-10 lg:absolute">
                    {subSections?.map((subSection) => {
                        const { href, ariaLabel, children, rel } = subSection;
                        return (
                            <li
                                key={href}
                                className="hover:text-blue-600 border px-[1rem] py-[0.25rem] bg-white w-[20rem]"
                            >
                                <Redirect
                                    rel={rel}
                                    href={href}
                                    ariaLabel={ariaLabel}
                                    children={children}
                                    redirectClassName="text-sm"
                                />
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};
