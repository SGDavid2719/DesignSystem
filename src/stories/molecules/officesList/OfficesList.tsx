import { OfficeItem, OfficeItemProps } from "./OfficeItem";

interface OfficesListProps {
    officesList: OfficeItemProps[];
}

export const OfficesList = ({ officesList } : OfficesListProps) => {

    return (
        <ul className="flex gap-4">
            {officesList.map((officeItem) => {
                return <li key={officeItem.location}><OfficeItem {...officeItem}/></li>
            })}
        </ul>
    )
    
}