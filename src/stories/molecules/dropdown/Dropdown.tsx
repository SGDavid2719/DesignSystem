import { useState } from "react";
import { Button } from "../../atoms/button/Button";

export interface DropdownOption {
    text: string;
    id: number;
}

export interface DropdownOptions {
    dropDownTitle: string;
    dropDownOptions: DropdownOption[];
}

export interface DropdownProps extends DropdownOptions {
    selectOption: (id: number) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
    dropDownTitle,
    dropDownOptions,
    selectOption,
}) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const rotateSVG = showDropdown
        ? "transition duration-500 rotate-180"
        : "transition duration-500";

    return (
        <div className="w-full">
            <Button
                label={dropDownTitle}
                onClick={() => setShowDropdown((prevState) => !prevState)}
                btnClassName={
                    "w-full items-center justify-center p-2 text-base font-normal text-white rounded-lg group hover:bg-gray-700 bg-gray-500"
                }
                renderIcon="chevron-down"
                iconClassName={rotateSVG}
            />
            {showDropdown && (
                <ul>
                    {dropDownOptions.map((option) => {
                        const { text, id } = option;
                        return (
                            <li key={id}>
                                <Button
                                    label={text}
                                    onClick={() => selectOption(id)}
                                    btnClassName={
                                        "w-full items-center justify-center p-2 text-base font-normal text-white rounded-lg group hover:bg-gray-700 bg-gray-500 pl-11"
                                    }
                                />
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};