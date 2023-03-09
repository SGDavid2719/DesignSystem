import { Redirect } from "../../atoms/redirect/Redirect";
import { Icon } from "../../atoms/icon/Icon";
import { Rel } from "../../../shared/types";

export interface IconLinkProps {
    href: string;
    rel: Rel;
    ariaLabel: string;
    iconLinkClassName?: string;
    iconId: string;
}

export const IconLink: React.FC<IconLinkProps> = ({
    href,
    ariaLabel,
    iconLinkClassName,
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
                iconLinkClassName,
            ].join(" ")}
        >
            <Icon iconId={iconId} />
        </Redirect>
    );
};
