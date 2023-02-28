import { Icon } from "../../atoms/icon/Icon";
import { Span } from "../../atoms/span/Span";

export interface OfficeItemProps {
    location: string;
    phoneNumber: string;
    email: string;
    schedules: string[];
}

export const OfficeItem = ({
    location,
    phoneNumber,
    email,
    schedules,
}: OfficeItemProps) => {
    return (
        <div>
            <div className="flex">
                <Span
                    children={
                        <>
                            {" "}
                            <Icon
                                iconId="location"
                                iconClassName="inline-block"
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
                                iconClassName="inline-block"
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
                                iconClassName="inline-block"
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
                                iconClassName="inline-block"
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
