import { Fragment } from "react";
import { Redirect, RedirectProps } from "../../atoms/redirect/Redirect";
import { Span } from "../../atoms/span/Span";

interface LinksListProps {
    /**
     * Propiedad obligatoria para indicar la lista de enlaces con sus propiedades pertinentes.
     */
    links: RedirectProps[];
    /**
     * Propiedad opcional para indicar las clases de la lista.
     */
    linksListClass?: string;
}

export const LinksList = ({ links, linksListClass }: LinksListProps) => {
    return (
        <ul className={["flex gap-4", linksListClass].join(" ")}>
            {links.map((link, linkIndex) => {
                const { href, ariaLabel, children, rel } = link;
                return (
                    <Fragment key={linkIndex}>
                        <li className="w-fit">
                            <Redirect
                                rel={rel}
                                href={href}
                                ariaLabel={ariaLabel}
                                children={children}
                                redirectClassName="text-sm"
                            />
                        </li>
                        {linkIndex + 1 !== links.length && (
                            <li>
                                <Span children="·" />
                            </li>
                        )}
                    </Fragment>
                );
            })}
        </ul>
    );
};
