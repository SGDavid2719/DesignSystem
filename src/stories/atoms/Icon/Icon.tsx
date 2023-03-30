import { ICONS } from "../../../shared/icons";

export interface IconProps {
    /**
     * Propiedad obligatoria para indicar el icono a representar.
     */
    iconId: string;
    /**
     * Propiedad opcional para indicar estilo del icono.
     */
    iconClassName?: string;
}

export const Icon: React.FC<IconProps> = ({ iconId, iconClassName }) => {
    const icon = ICONS.filter((icon) => icon.iconId === iconId);

    return (
        <svg
            role="img"
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

export const ListOfIcons = () => {
    return (
        <div className="flex gap-1">
            {ICONS.map((icon) => (
                <div className="border border-[#A6A6AA] p-2" key={icon.iconId}>
                    <Icon iconId={icon.iconId} />
                </div>
            ))}
        </div>
    );
};
