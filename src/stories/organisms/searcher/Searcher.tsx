import { useState } from "react";
import { Button } from "../../atoms/button/Button";
import { InputProps } from "../../atoms/input/Input";
import { LabelProps } from "../../atoms/label/Label";
import { AccessibleInput } from "../../molecules/accessibleInput/AccessibleInput";

interface SearcherProps extends LabelProps, InputProps {}

/**
 * Primary UI component for user interaction
 */
export const Searcher: React.FC<SearcherProps> = ({
    text,
    htmlFor,
    type = "text",
    name,
    value,
    maxLength,
    minLength,
    placeholder,
    readOnly = false,
}) => {
    return (
        <form
            className="flex gap-2 justify-end"
            onSubmit={(e) => e.preventDefault()}
        >
            <AccessibleInput
                text={text}
                htmlFor={htmlFor}
                name={name}
                type={type}
                value={value}
                maxLength={maxLength}
                minLength={minLength}
                placeholder={placeholder}
                readOnly={readOnly}
                inputClassName="w-32"
            />
            <Button
                type="submit"
                hasIconOnly={true}
                renderIcon="magnifying-glass"
                align="start"
                btnClassName="bg-gray-200 hover:bg-gray-400 p-3 h-9 cursor-pointer self-end"
                iconClassName="h-12 w-12"
            />
            <Button
                type="reset"
                hasIconOnly={true}
                renderIcon="cross"
                align="start"
                btnClassName="bg-gray-200 hover:bg-gray-400 p-3 h-9 cursor-pointer self-end"
                iconClassName="h-12 w-12"
            />
        </form>
    );
};
