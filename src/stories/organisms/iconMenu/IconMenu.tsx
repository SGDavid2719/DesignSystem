import { IconLink, IconLinkProps } from "../../molecules/iconLink/IconLink";

interface IconMenuProps {
    /**
     * Propiedad obligatoria para indicar la lista de iconos como enlaces con sus propiedades pertinentes.
     */
    iconLinks: IconLinkProps[];
}
export const IconMenu = ({ iconLinks }: IconMenuProps) => {
    return (
        <ul className={["grid", `grid-cols-6`, "w-fit", "gap-8"].join(" ")}>
            {iconLinks.map((iconLink, iconIndex) => {
                const { href, ariaLabel, iconClassName, iconId, rel } =
                    iconLink;
                return (
                    <li key={`${iconIndex}${href}`}>
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
