import { Redirect, RedirectProps } from "../../atoms/redirect/Redirect";
import { Span } from "../../atoms/span/Span";
import { Icon } from "../../atoms/icon/Icon";
import { dateDiffInDays } from "../../../utils/dateFunctions";

export interface OfferLinkProps {
    /**
     * Propiedad obligatoria para indicar el enlace de la oferta.
     */
    offerRedirect: RedirectProps;
    /**
     * Propiedad opcional para indicar el primer subtítulo.
     */
    firstSubtitle?: string;
    /**
     * Propiedad opcional para indicar el segundo subtítulo.
     */
    secondSubtitle?: string;
    /**
     * Propiedad obligatoria para indicar el nombre de la oferta.
     */
    offerName: string;
    /**
     * Propiedad obligatoria para indicar el lugar de la oferta.
     */
    placeName: string;
    /**
     * Propiedad obligatoria para indicar la fecha de publicación de la oferta.
     */
    publicationDate: Date;
    /**
     * Propiedad obligatoria para indicar el número de referencia de la oferta.
     */
    referenceNumber: number;
}

export const OfferLink: React.FC<OfferLinkProps> = ({
    offerRedirect,
    firstSubtitle,
    secondSubtitle,
    offerName,
    placeName,
    publicationDate,
    referenceNumber,
}) => {
    return (
        <div className="bg-white">
            <div className="flex">
                <Redirect
                    {...offerRedirect}
                    redirectClassName="font-semibold text-xl text-blue-800"
                />
            </div>
            {(firstSubtitle || secondSubtitle) && (
                <div className="flex gap-1">
                    <Span
                        children={firstSubtitle}
                        spanClassName="font-semibold uppercase"
                    />{" "}
                    - <Span children={secondSubtitle} />
                </div>
            )}
            <div>
                <Span
                    children={
                        <>
                            {" "}
                            <Icon
                                iconId="phone"
                                iconClassName="inline-block"
                            />{" "}
                            {offerName}{" "}
                        </>
                    }
                    spanClassName="text-green-900 font-semibold"
                />
            </div>
            <div>
                <Span
                    children={
                        <>
                            {" "}
                            <Icon
                                iconId="location"
                                iconClassName="inline-block"
                            />{" "}
                            {placeName}{" "}
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
                            {`Hace ${dateDiffInDays(
                                new Date(),
                                publicationDate
                            )} días`}{" "}
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
                            {`Ref. ${referenceNumber}`}{" "}
                        </>
                    }
                />
            </div>
        </div>
    );
};
