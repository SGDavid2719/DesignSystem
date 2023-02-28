import { Icon } from "../../atoms/icon/Icon";
import { Redirect, RedirectProps } from "../../atoms/redirect/Redirect";
import { Span } from "../../atoms/span/Span";
import { OfferLink, OfferLinkProps } from "../../molecules/offerLink/OfferLink";

interface InfoCardProps {
    offerLinks: OfferLinkProps[];
    redirect: RedirectProps;
}
export const OffersList = ({ offerLinks, redirect }: InfoCardProps) => {
    return (
        <div className="w-[22rem] bg-white p-4">
            <div className="flex justify-between mb-4">
                <Span
                    children={"Últimas ofertas y prácticas"}
                    spanClassName="uppercase"
                />
                <Icon iconId="bullhorn" />
            </div>
            <div className="h-[25rem] overflow-y-scroll mb-5">
                {offerLinks.map((offerLink) => {
                    return (
                        <div key={offerLink.referenceNumber} className="p-4">
                            <OfferLink {...offerLink} />
                        </div>
                    );
                })}
            </div>
            <div className="hover:bg-[#E6E6E6] text-center p-2">
                <Redirect {...redirect} redirectClassName="w-full text-sm" />
            </div>
        </div>
    );
};
