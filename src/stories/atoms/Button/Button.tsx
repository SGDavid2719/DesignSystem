import { Icon } from "../icon/Icon";

interface ButtonProps {
    /**
     * Button type
     */
    type?: "button" | "reset" | "submit";
    /**
     * Button role
     */
    role?: string;
    /**
     * Button contents
     */
    label?: string;
    /**
     * Button title
     */
    title?: string;
    /**
     * Button styles from outside
     */
    btnClassName?: string;
    /**
     * Aria controls
     */
    ariaControls?: string;
    /**
     * Aria expanded
     */
    ariaExpanded?: boolean;
    /**
     * Aria checked
     */
    ariaChecked?: boolean;
    /**
     * Aria label
     */
    ariaLabel?: string;
    /**
     * Disabled
     */
    disabled?: boolean;
    /**
     * Tabindex
     */
    tabIndex?: number;
    /**
     * Render Icon
     */
    renderIcon?: string;
    /**
     * hasIconOnly
     */
    hasIconOnly?: boolean;
    /**
     * Icon styles from outside
     */
    iconClassName?: string;
    /**
     * Icon position
     */
    align?: "end" | "start";
    /**
     * Optional click handler
     */
    onClick?: () => void;
    /**
     * Optional blur handler
     */
    onBlur?: () => void;
    /**
     * Optional focus handler
     */
    onFocus?: () => void;
    /**
     * Optional mouse enter handler
     */
    onMouseEnter?: () => void;
    /**
     * Optional mouse leave handler
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
    title = "Button",
    ariaControls,
    ariaExpanded = false,
    ariaLabel,
    ariaChecked,
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
            title={title}
            aria-label={ariaLabel}
            aria-controls={ariaControls}
            aria-expanded={role !== "switch" ? ariaExpanded : undefined}
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
