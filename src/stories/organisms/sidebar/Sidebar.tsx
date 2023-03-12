import { Dropdown, DropdownOptions } from "../../molecules/dropdown/Dropdown";

export interface SidebarProps {
    sidebarOptions: DropdownOptions[];
    sideBarClassName?: string;
    selectOption: (id: number) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
    sidebarOptions,
    selectOption,
    sideBarClassName,
}) => {
    return (
        <aside
            className={[
                "block bg-gray-500 h-full w-full",
                sideBarClassName,
            ].join(" ")}
        >
            <ul>
                {sidebarOptions.map((options, index) => {
                    const { dropDownOptions, dropDownTitle } = options;
                    return (
                        <li key={index}>
                            <Dropdown
                                dropDownTitle={dropDownTitle}
                                dropDownOptions={dropDownOptions}
                                selectOption={selectOption}
                            />
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
};
