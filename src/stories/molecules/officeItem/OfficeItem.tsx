import { Icon } from "../../atoms/icon/Icon";
import { Span } from "../../atoms/span/Span";

export interface OfficeItemProps {
    /**
     * Propiedad obligatoria para indicar el nombre de la oficina.
     */
    name: string;
    /**
     * Propiedad obligatoria para indicar la localización de la oficina.
     */
    location: string;
    /**
     * Propiedad obligatoria para indicar el número de teléfono de la oficina.
     */
    phoneNumber: string;
    /**
     * Propiedad obligatoria para indicar el correo de la oficina.
     */
    email: string;
    /**
     * Propiedad obligatoria para indicar los horarios de la oficina.
     */
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
                <div>
                    <Icon
                        iconId="location"
                        iconClassName="inline-block text-blue-400"
                    />
                    <Span spanClassName="ml-1" children={location} />
                </div>
            </div>
            <div>
                <div>
                    <Icon
                        iconId="phone"
                        iconClassName="inline-block text-blue-400"
                    />
                    <Span spanClassName="ml-1" children={phoneNumber} />
                </div>
            </div>
            <div>
                <div>
                    <Icon
                        iconId="mail"
                        iconClassName="inline-block text-blue-400"
                    />
                    <Span spanClassName="ml-1" children={email} />
                </div>
            </div>
            <div>
                <div>
                    <Icon
                        iconId="schedule"
                        iconClassName="inline-block text-blue-400"
                    />
                    {schedules.map((schedule, index) => (
                        <Span
                            key={index}
                            children={schedule}
                            spanClassName={`${index !== 0 ? "block" : "ml-1"}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
