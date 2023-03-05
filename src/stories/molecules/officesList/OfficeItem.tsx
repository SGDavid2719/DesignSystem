import { Icon } from "../../atoms/icon/Icon";
import { Span } from "../../atoms/span/Span";

export interface OfficeItemProps {
    name: string;
    location: string;
    phoneNumber: string;
    email: string;
    schedules: string[];
}

export const OfficeItem = ({
    name,
    location,
    phoneNumber,
    email,
    schedules,
}: OfficeItemProps) => {
    return (
        <div className="mb-4">
            <div className="text-xl mb-4">{name}</div>
            <div className="flex">
                <Span
                    children={
                        <>
                            {" "}
                            <Icon
                                iconId="location"
                                iconClassName="inline-block text-blue-400"
                            />{" "}
                            {location}{" "}
                        </>
                    }
                />
            </div>
            <div>
                <Span
                    children={
                        <>
                            {" "}
                            <Icon
                                iconId="phone"
                                iconClassName="inline-block text-blue-400"
                            />{" "}
                            {phoneNumber}{" "}
                        </>
                    }
                />
            </div>
            <div>
                <Span
                    children={
                        <>
                            {" "}
                            <Icon
                                iconId="mail"
                                iconClassName="inline-block text-blue-400"
                            />{" "}
                            {email}{" "}
                        </>
                    }
                />
            </div>
            <div>
                <Span
                    children={
                        <>
                            {" "}
                            <Icon
                                iconId="schedule"
                                iconClassName="inline-block text-blue-400"
                            />{" "}
                            {schedules.map((schedule, index) => (
                                <Span
                                    key={index}
                                    children={schedule}
                                    spanClassName={`${index !== 0 && "block"}`}
                                />
                            ))}{" "}
                        </>
                    }
                />
            </div>
        </div>
    );
};
