import {
    OfficeItem,
    OfficeItemProps,
} from "../../molecules/officeItem/OfficeItem";

interface OfficesListProps {
    officesList: OfficeItemProps[];
}

export const OfficesList = ({ officesList }: OfficesListProps) => {
    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {officesList.map((officeItem) => {
                return (
                    <li key={officeItem.location}>
                        <OfficeItem {...officeItem} />
                    </li>
                );
            })}
        </ul>
    );
};
