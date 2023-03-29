import { Icon } from "../icon/Icon";

interface ButtonProps {
    /**
     * Propiedad opcional para indicar el tipo del botón.
     */
    type?: "button" | "reset" | "submit";
    /**
     * Propiedad opcional para indicar el rol del botón.
     */
    role?: string;
    /**
     * Propiedad opcional para indicar el texto contenido del botón.
     */
    label?: string;
    /**
     * Propiedad opcional para indicar el estilo del botón.
     */
    btnClassName?: string;
    /**
     * Propiedad opcional para indicar si un control se expande o se contrae, y si los elementos controlados se muestran u ocultan o no.
     */
    ariaExpanded?: boolean;
    /**
     * Propiedad opcional para indicar si el elemento está marcado, no marcado o indeterminado. Se utiliza en los Toggle.
     */
    ariaChecked?: boolean;
    /**
     * Propiedad opcional para indicar el estado actual "pulsado" de un botón de alternar.
     */
    ariaPressed?: boolean;
    /**
     * Propiedad opcional para indicar de forma accesible el contenido visible. Se utiliza para botones solo con icono.
     */
    ariaLabel?: string;
    /**
     * Propiedad opcional para deshabilitar el botón.
     */
    disabled?: boolean;
    /**
     * Propiedad opcional para indicar el Tabindex.
     */
    tabIndex?: number;
    /**
     * Propiedad opcional para indicar qué icono se quiere renderizar.
     */
    renderIcon?: string;
    /**
     * Propiedad opcional para indicar que únicamente se muestre el icono renderizado.
     */
    hasIconOnly?: boolean;
    /**
     * Propiedad opcional para indicar las clases del icono.
     */
    iconClassName?: string;
    /**
     * Propiedad opcional para indicar el alineado del icono.
     */
    align?: "end" | "start";
    /**
     * Propiedad opcional para indicar la acción cuando el botón es clicado.
     */
    onClick?: () => void;
    /**
     * Propiedad opcional para indicar la acción cuando el botón pierde el foco.
     */
    onBlur?: () => void;
    /**
     * Propiedad opcional para indicar la acción cuando el botón obtiene el foco.
     */
    onFocus?: () => void;
    /**
     * Propiedad opcional para indicar la acción cuando el ratón entra en el botón.
     */
    onMouseEnter?: () => void;
    /**
     * Propiedad opcional para indicar la acción cuando el ratón sale del botón.
     */
    onMouseLeave?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
    type = "button",
    role = "button",
    label,
    ariaExpanded = false,
    ariaLabel,
    ariaChecked,
    ariaPressed = undefined,
    disabled = false,
    tabIndex,
    renderIcon,
    hasIconOnly,
    align = "end",
    onClick,
    onBlur,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    btnClassName,
    iconClassName,
}) => {
    return (
        <button
            type={type}
            role={role}
            aria-label={ariaLabel}
            aria-expanded={role !== "switch" ? ariaExpanded : undefined}
            aria-pressed={ariaPressed}
            aria-checked={ariaChecked}
            disabled={disabled}
            tabIndex={tabIndex}
            className={[
                "p-1 flex",
                `${disabled ? "cursor-not-allowed" : "cursor-pointer"}`,
                `${
                    renderIcon
                        ? align === "end"
                            ? "justify-between"
                            : "flex-row-reverse justify-end"
                        : ""
                }`,
                btnClassName,
            ].join(" ")}
            onClick={onClick}
            onBlur={onBlur}
            onFocus={onFocus}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {!hasIconOnly && <span className={[].join(" ")}>{label}</span>}
            {renderIcon && (
                <div className={`my-auto`}>
                    {<Icon iconId={renderIcon} iconClassName={iconClassName} />}
                </div>
            )}
        </button>
    );
};
