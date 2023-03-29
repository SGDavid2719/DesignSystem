import { useState } from "react";
import { Button } from "../../atoms/button/Button";
import { Span } from "../../atoms/span/Span";

interface ToggleProps {
    id: string;
    label: string;
    checkedText: string;
    notCheckedText: string;
    toggleId: string;
    ariaLabel: string;
}

export const Toggle: React.FC<ToggleProps> = ({
    id,
    label,
    checkedText,
    notCheckedText,
    toggleId,
    ariaLabel,
}) => {
    const [checked, setChecked] = useState(false);

    const before = `before:absolute before:w-[1.125rem] before:rounded-full before:h-[1.125rem] before:bg-white before:content-[''] before:mt-[0.185rem] before:ml-[0.185rem] ${
        checked
            ? "before:transition before:duration-150 before:translate-x-[1.5rem]"
            : "before:transition before:duration-150"
    }`;

    console.log(checked);

    return (
        <div>
            <Button
                type="button"
                role="switch"
                ariaChecked={checked}
                btnClassName="overflow-hidden absolute h-[3.7rem] w-[5.5rem]"
                onClick={() => {
                    setChecked((prevState) => !prevState);
                }}
            />
            <label htmlFor={id} id={toggleId} className="bg-white text-black">
                <Span>{label}</Span>
                <div className="mt-3 flex gap-3 spaccing-margin-t--lg cursor-pointer items-center w-[5.5rem]">
                    <div
                        className={`rounded-full w-[3rem] h-[1.5rem] ${
                            checked ? "bg-[#198038]" : "bg-[#8D8D8D]"
                        } ${before}`}
                    />
                    <Span spanClassName="font-semibold">
                        {checked ? checkedText : notCheckedText}
                    </Span>
                </div>
            </label>
        </div>
    );
};
