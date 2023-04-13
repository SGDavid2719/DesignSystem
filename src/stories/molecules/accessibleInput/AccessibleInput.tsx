import { Input, InputProps } from "../../atoms/input/Input";
import { Label, LabelProps } from "../../atoms/label/Label";

interface AccessibleInputProps extends LabelProps, InputProps {}

/**
 * Primary UI component for user interaction
 */
export const AccessibleInput: React.FC<AccessibleInputProps> = ({
    text,
    htmlFor,
    type = "text",
    name,
    value,
    maxLength,
    minLength,
    placeholder,
    readOnly = false,
    onChange,
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
        <div>
            {!placeholderCheckingType && (
                <Label text={text} htmlFor={htmlFor} />
            )}
            <Input
                name={name}
                type={type}
                value={value}
                maxLength={maxLength}
                minLength={minLength}
                placeholder={placeholderCheckingType}
                readOnly={readOnly}
                inputClassName={`block border-2 p-1 ${inputClassName}`}
                onChange={onChange}
            />
        </div>
    );
};
