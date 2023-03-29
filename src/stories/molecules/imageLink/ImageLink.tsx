import { Redirect } from "../../atoms/redirect/Redirect";
import { Image } from "../../atoms/image/Image";
import { Rel } from "../../../shared/types";

export interface ImageLinkProps {
    href: string;
    rel: Rel;
    ariaLabel: string;
    linkClassName?: string;
    imageClassName?: string;
    src: string;
    alt: string;
}

export const ImageLink: React.FC<ImageLinkProps> = ({
    href,
    ariaLabel,
    rel,
    linkClassName,
    imageClassName,
    src,
    alt,
}) => {
    return (
        <Redirect
            rel={rel}
            href={href}
            ariaLabel={ariaLabel}
            redirectClassName={["w-full block", linkClassName].join(" ")}
        >
            <Image src={src} alt={alt} imageClassName={imageClassName} />
        </Redirect>
    );
};
