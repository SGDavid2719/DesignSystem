import { ICONS } from "../../../shared/icons";

interface IconProps {
    iconId: string;
    iconClassName?: string;
    dataTestid?: string;
}

export const Icon: React.FC<IconProps> = ({ iconId, iconClassName }) => {
    const icon = ICONS.filter((icon) => icon.iconId === iconId);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={["h-4 w-4", iconClassName].join(" ")}
            viewBox={
                iconId && icon.length && icon[0].viewBox
                    ? icon[0].viewBox
                    : "0 0 20 20"
            }
            fill="currentColor"
        >
            <path
                fillRule="evenodd"
                d={iconId && icon.length ? icon[0].d : ""}
                clipRule="evenodd"
            />
        </svg>
    );
};
