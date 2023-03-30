import { IconLink, IconLinkProps } from "../../molecules/iconLink/IconLink";

interface IconMenuProps {
    iconLinks: IconLinkProps[];
}
export const IconMenu = ({ iconLinks }: IconMenuProps) => {
    return (
        <ul className={["grid", `grid-cols-6`, "w-fit", "gap-8"].join(" ")}>
            {iconLinks.map((iconLink) => {
                const { href, ariaLabel, iconClassName, iconId, rel } =
                    iconLink;
                return (
                    <li key={href}>
                        <IconLink
                            rel={rel}
                            href={href}
                            ariaLabel={ariaLabel}
                            iconClassName={iconClassName}
                            iconId={iconId}
                        />
                    </li>
                );
            })}
        </ul>
    );
};
