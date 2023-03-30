import { Redirect, RedirectProps } from "../../atoms/redirect/Redirect";
import { Icon, IconProps } from "../../atoms/icon/Icon";

export interface IconLinkProps extends RedirectProps, IconProps {}

export const IconLink: React.FC<IconLinkProps> = ({
    href,
    ariaLabel,
    iconClassName,
    iconId,
    rel,
}) => {
    return (
        <Redirect
            rel={rel}
            href={href}
            ariaLabel={ariaLabel}
            redirectClassName={[
                "border rounded-full block w-fit h-fit p-2 hover:bg-[#f6f6f6] hover:border-black",
                iconClassName,
            ].join(" ")}
        >
            <Icon iconId={iconId} />
        </Redirect>
    );
};
