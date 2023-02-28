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
     * Disabled
     */
    disabled?: boolean;
    /**
     * Tabindex
     */
    tabIndex?: number;
    /**
     * Size
     */
    size?: "sm" | "md" | "lg" | "xl";
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
export const Button = ({
    type = "button",
    role = "button",
    label,
    title = "Button",
    ariaControls,
    ariaExpanded = false,
    disabled = false,
    tabIndex,
    size = "sm",
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
}: ButtonProps) => {
    return (
        <button
            type={type}
            role={role}
            title={title}
            aria-controls={ariaControls}
            aria-expanded={ariaExpanded}
            disabled={disabled}
            tabIndex={tabIndex}
            className={[
                "p-1 flex",
                `${disabled ? "cursor-not-allowed" : "cursor-pointer"}`,
                `${
                    align === "end"
                        ? "justify-between"
                        : "flex-row-reverse justify-end"
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
