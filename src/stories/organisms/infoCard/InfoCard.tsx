import { Icon } from "../../atoms/icon/Icon";
import { Paragraph } from "../../atoms/paragraph/Paragraph";
import { Redirect, RedirectProps } from "../../atoms/redirect/Redirect";
import { Time } from "../../atoms/time/Time";
import { ImageLink, ImageLinkProps } from "../../molecules/imageLink/ImageLink"

interface InfoCardProps {
 cardPhoto: ImageLinkProps;
 dateTime: Date;
 mainRedirect: RedirectProps;
 secondaryRedirect: RedirectProps;
 text: string;
 iconId: string;
}
export const InfoCard = ({
    cardPhoto,
    dateTime,
    mainRedirect,
    text,
    secondaryRedirect,
    iconId
}: InfoCardProps) => {

  return (
  <div className="w-[25rem] border">
    <div className="p-4">
        <ImageLink  {...cardPhoto} imageClassName="h-[7rem] w-full"/>
    </div>
    <div className="flex gap-2 p-4">
        <div className="w-1/5">
            <Time dateTime={dateTime}/>
        </div>
        <div className="w-4/5">
            <Redirect {...mainRedirect} redirectClassName="text-blue-600 font-semibold"/>
        </div>
    </div>
    <div className="p-4">
        <Paragraph text={text}/>
    </div>
    <div className="flex gap-2 p-4">
        <Icon iconId={iconId} iconClassName="mt-1"/>
        <Redirect {...secondaryRedirect} redirectClassName="hover:text-blue-600 hover:font-semibold"/>
    </div>
  </div>)
};
  