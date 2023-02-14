interface IconProps {
    iconId: string;
	iconClassName?: string;
}

const ICONS = [
	{
		iconId: "add",
		d: "M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",
	},
	{
		iconId: "chevron-down",
		d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
	},
	{
		iconId: "chevron-left",
		d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
	},
	{
		iconId: "chevron-right",
		d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
	},
	{
		iconId: "chevron-up",
		d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
	},
	{
		iconId: "dots-horizontal",
		d: "M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z",
	},
	{
		iconId: "minus",
		d: "M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
	},
	{
		iconId: "cross",
		d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
	},
];

const Icon: React.FC<IconProps> = ({ iconId,  iconClassName}) => {
    const icon = ICONS.filter((icon) => icon.iconId === iconId);

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={["h-4 w-4", iconClassName].join(" ")}
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path
				fillRule="evenodd"
				d={iconId && icon.length > 0 ? icon[0].d : ""}
				clipRule="evenodd"
			/>
		</svg>
	);
}

export default Icon;