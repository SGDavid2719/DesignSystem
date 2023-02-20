import {Redirect} from '../../atoms/redirect/Redirect';
import {Image} from '../../atoms/image/Image';

export interface ImageLinkProps {
    href: string;
    ariaLabel: string;
    linkClassName?: string;
    imageClassName?: string;
    src: string;
    alt: string;
}

export const ImageLink: React.FC<ImageLinkProps> = ({ href, ariaLabel, linkClassName, imageClassName, src, alt }) => {
    return (
        <Redirect href={href} ariaLabel={ariaLabel} redirectClassName={["w-fit block", linkClassName].join(" ")}>
            <Image src={src} alt={alt} imageClassName={imageClassName}/>
        </Redirect>
    )
}