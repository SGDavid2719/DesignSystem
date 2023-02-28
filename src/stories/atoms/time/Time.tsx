import { Span } from "../span/Span";

export interface TimeProps {
    dateTime: Date;
}

export const Time: React.FC<TimeProps> = ({ dateTime }) => {
    return (
        <time dateTime={dateTime.toISOString()} className="border-2 border-black p-2 block w-fit text-center bg-white">
            <Span children={dateTime.getDay()} spanClassName="block mb-1 text-xl"/>
            <Span children={dateTime.toLocaleString('default', { month: 'short' })} spanClassName="block uppercase"/>
        </time>
    )
}