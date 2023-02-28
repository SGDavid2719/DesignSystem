import { Redirect, RedirectProps } from "../../atoms/redirect/Redirect";
import { Span } from "../../atoms/span/Span";
import { Icon } from "../../atoms/icon/Icon";
import { dateDiffInDays } from "../../../utils/dateFunctions";

export interface OfferLinkProps {
    offerRedirect: RedirectProps;
    firstSubtitle?: string;
    secondSubtitle?: string;
    offerName: string;
    placeName: string;
    publicationDate: Date;
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
