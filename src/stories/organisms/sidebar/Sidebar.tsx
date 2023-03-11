import { Dropdown, DropdownOption } from "../../molecules/dropdown/Dropdown";

export interface SidebarProps {
    sidebarOptions: DropdownOption[][];
    selectOption: (id: number) => void;
    sideBarClassName?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
    sidebarOptions,
    selectOption,
    sideBarClassName,
}) => {
    return (
        <aside
            className={["block bg-gray-500 rounded", sideBarClassName].join(
                " "
            )}
        >
            <ul>
                {sidebarOptions.map((options, index) => {
                    return (
                        <li key={index}>
                            <Dropdown
                                dropDownOptions={options}
                                selectOption={selectOption}
                            />
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
};
