import { Paragraph } from "../../atoms/paragraph/Paragraph";
import { RedirectProps } from "../../atoms/redirect/Redirect";
import { IconLinkProps } from "../../molecules/iconLink/IconLink";
import { LinksList } from "../../molecules/linksList/LinksList";
import { OfficeItemProps } from "../../molecules/officesList/OfficeItem";
import { OfficesList } from "../../molecules/officesList/OfficesList";
import { IconMenu } from "../iconMenu/IconMenu"

interface FooterProps{
    officesList: OfficeItemProps[];
    mainParagraph: string;
    secondaryParagraph: string;
    iconsLinks: IconLinkProps[];
    mainLinks: RedirectProps[];
    secondaryLinks: RedirectProps[];
}

export const Footer = ({ officesList, iconsLinks, mainParagraph, secondaryParagraph, mainLinks, secondaryLinks } : FooterProps) => {

    return (
        <footer className="bg-[#303030] text-white p-10">
            <div id="footerTop">
                <OfficesList officesList={officesList}/>
            </div>
            <div id="footerBottom" className="border-t mt-10 pt-5 flex">
                <div className="w-2/3">
                    <Paragraph text={mainParagraph} textClassName="text-sm"/>
                    <LinksList links={mainLinks} linksListClass="text-blue-400"/>
                    <Paragraph text={secondaryParagraph} textClassName="text-sm" />
                    <LinksList links={secondaryLinks} linksListClass="text-blue-400"/>
                </div>
                <div className="w-1/3">
                    <IconMenu iconLinks={iconsLinks} />
                </div>
            </div>
        </footer>
    )
    
}