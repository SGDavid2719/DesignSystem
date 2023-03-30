import { Icon } from "../../atoms/icon/Icon";
import { Paragraph } from "../../atoms/paragraph/Paragraph";
import { Redirect, RedirectProps } from "../../atoms/redirect/Redirect";
import { Time } from "../../molecules/time/Time";
import { ImageLink, ImageLinkProps } from "../../molecules/imageLink/ImageLink";

interface InfoCardProps {
    cardPhoto: ImageLinkProps;
    dateTime: Date;
    mainRedirect: RedirectProps;
    secondaryRedirect: RedirectProps;
    text: string;
    iconId: string;
    infoCardClassName?: string;
}
export const InfoCard = ({
    cardPhoto,
    dateTime,
    mainRedirect,
    text,
    secondaryRedirect,
    iconId,
    infoCardClassName,
}: InfoCardProps) => {
    return (
        <div
            className={[
                "w-full h-full bg-white relative",
                infoCardClassName,
            ].join(" ")}
        >
            <div>
                <ImageLink {...cardPhoto} imageClassName="w-full" />
            </div>
            <div className="flex justify-between gap-2 p-4 h-[8rem]">
                <div>
                    <Time dateTime={dateTime} />
                </div>
                <div className="w-4/5">
                    <Redirect
                        {...mainRedirect}
                        redirectClassName="text-sm lg:text-base text-blue-600 font-semibold"
                    />
                </div>
            </div>
            <div className="p-4">
                <Paragraph text={text} textClassName="text-justify" />
            </div>
            <div className="flex gap-2 p-4 bottom-0 lg:absolute">
                <Icon iconId={iconId} iconClassName="mt-1" />
                <Redirect
                    {...secondaryRedirect}
                    redirectClassName="hover:text-blue-600 hover:font-semibold"
                />
            </div>
        </div>
    );
};
