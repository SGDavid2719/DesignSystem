import { Fragment } from "react";
import { Redirect, RedirectProps } from "../../atoms/redirect/Redirect";
import { Span } from "../../atoms/span/Span";


interface LinksListProps {
    links: RedirectProps[];
    linksListClass?: string;
}

export const LinksList = ({ links, linksListClass } : LinksListProps) => {

    return (
        <ul className={["flex gap-4", linksListClass].join(" ")}>
            {links.map((link, index) => {
                const { href, ariaLabel, children} = link;
                return (
                    <Fragment key={href}>
                        <li className='w-fit'><Redirect href={href} ariaLabel={ariaLabel} children={children} redirectClassName='text-sm'/></li>
                        {index+1 !== links.length && <li><Span children="·"/></li>}
                    </Fragment>
                )
            })}
        </ul>
    )
}