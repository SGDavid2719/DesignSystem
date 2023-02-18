import {Redirect} from '../../atoms/redirect/Redirect';
import {Image} from '../../atoms/image/Image';

export interface ImageLinkProps {
    href: string;
    ariaLabel: string;
    imageLinkClassName?: string;
    src: string;
    alt: string;
}

export const ImageLink: React.FC<ImageLinkProps> = ({ href, ariaLabel, imageLinkClassName, src, alt }) => {
    return (
        <Redirect href={href} ariaLabel={ariaLabel} redirectClassName={[imageLinkClassName].join(" ")}>
            <Image src={src} alt={alt}/>
        </Redirect>
    )
}