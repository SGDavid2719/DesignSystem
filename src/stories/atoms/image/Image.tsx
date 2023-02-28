interface ImageProps {
    src: string;
    alt: string;
    imageClassName?: string;
}

export const Image: React.FC<ImageProps> = ({ src, alt, imageClassName }) => {
    return <img src={src} alt={alt} className={imageClassName} />;
};
