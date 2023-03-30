export interface ImageProps {
    /**
     * Propiedad obligatoria para indicar donde se encuentra la imagen.
     */
    src: string;
    /**
     * Propiedad obligatoria para indicar un texto alternativo a la imagen.
     */
    alt: string;
    /**
     * Propiedad opcional para indicar el estilo de la imagen.
     */
    imageClassName?: string;
}

export const Image: React.FC<ImageProps> = ({ src, alt, imageClassName }) => {
    return <img src={src} alt={alt} className={imageClassName} />;
};
