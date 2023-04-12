export interface LabelProps {
    /**
     * Propiedad obligatoria para indicar el texto contenido.
     */
    text: string;
    /**
     * Propiedad obligatoria para indicar el id del elemento al que está vinculado.
     */
    htmlFor: string;
    /**
     * Propiedad opcional para indicar el estilo.
     */
    labelClassName?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Label: React.FC<LabelProps> = ({
    text,
    htmlFor,
    labelClassName,
}) => {
    return (
        <label htmlFor={htmlFor} className={labelClassName}>
            {text}
        </label>
    );
};
