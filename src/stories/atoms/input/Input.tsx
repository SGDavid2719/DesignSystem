import { InputType } from "../../../shared/types";

export interface InputProps {
    /**
     * Propiedad obligatoria para indicar el tipo de entrada.
     */
    type?: InputType;
    /**
     * Propiedad obligatoria para indicar el nombre del elemento.
     */
    name: string;
    /**
     * Propiedad opcional para indicar el valor actual.
     */
    value?: string;
    /**
     * Propiedad opcional para indicar el número máximo de caracteres.
     */
    maxLength?: number;
    /**
     * Propiedad opcional para indicar el número mínimo de caracteres.
     */
    minLength?: number;
    /**
     * Propiedad opcional para indicar el un texto de ayuda.
     */
    placeholder?: string;
    /**
     * Propiedad opcional para indicar si es un campo únicamente de lectura.
     */
    readOnly?: boolean;
    /**
     * Propiedad opcional para indicar el estilo.
     */
    inputClassName?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Input: React.FC<InputProps> = ({
    type = "text",
    name,
    value,
    maxLength,
    minLength,
    placeholder,
    readOnly = false,
    inputClassName,
}) => {
    const placeholderCheckingType =
        type === "email" ||
        type === "number" ||
        type === "password" ||
        type === "search" ||
        type === "tel" ||
        type === "text" ||
        type === "url"
            ? placeholder
            : undefined;

    return (
        <input
            type={type}
            name={name}
            id={name}
            value={value}
            maxLength={maxLength}
            minLength={minLength}
            placeholder={placeholderCheckingType}
            readOnly={readOnly}
            className={inputClassName}
        />
    );
};
