import { Redirect, RedirectProps } from "../../atoms/redirect/Redirect";
import { Image, ImageProps } from "../../atoms/image/Image";

export interface ImageLinkProps extends RedirectProps, ImageProps {}

export const ImageLink: React.FC<ImageLinkProps> = ({
    href,
    ariaLabel,
    rel,
    redirectClassName,
    imageClassName,
    src,
    alt,
}) => {
    return (
        <Redirect
            rel={rel}
            href={href}
            ariaLabel={ariaLabel}
            redirectClassName={["w-full block", redirectClassName].join(" ")}
        >
            <Image src={src} alt={alt} imageClassName={imageClassName} />
        </Redirect>
    );
};
