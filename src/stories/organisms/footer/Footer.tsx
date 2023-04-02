import { Paragraph } from "../../atoms/paragraph/Paragraph";
import { RedirectProps } from "../../atoms/redirect/Redirect";
import { IconLinkProps } from "../../molecules/iconLink/IconLink";
import { LinksList } from "../../molecules/linksList/LinksList";
import { OfficeItemProps } from "../../molecules/officeItem/OfficeItem";
import { OfficesList } from "../officesList/OfficesList";
import { IconMenu } from "../iconMenu/IconMenu";

interface FooterProps {
    /**
     * Propiedad obligatoria para indicar la lista de oficinas con sus propiedades pertinentes.
     */
    officesList: OfficeItemProps[];
    /**
     * Propiedad obligatoria para indicar el texto principal.
     */
    mainParagraph: string;
    /**
     * Propiedad obligatoria para indicar el texto secundario.
     */
    secondaryParagraph: string;
    /**
     * Propiedad obligatoria para indicar la lista iconos como enlaces con sus propiedades pertinentes.
     */
    iconsLinks: IconLinkProps[];
    /**
     * Propiedad obligatoria para indicar la lista primaria de enlaces con sus propiedades pertinentes.
     */
    mainLinks: RedirectProps[];
    /**
     * Propiedad obligatoria para indicar la lista secundaria de enlaces con sus propiedades pertinentes.
     */
    secondaryLinks: RedirectProps[];
}

export const Footer = ({
    officesList,
    iconsLinks,
    mainParagraph,
    secondaryParagraph,
    mainLinks,
    secondaryLinks,
}: FooterProps) => {
    return (
        <footer className="bg-[#303030] text-white p-10">
            <div id="footerTop">
                <OfficesList officesList={officesList} />
            </div>
            <div
                id="footerBottom"
                className="border-t mt-10 pt-5 block lg:flex"
            >
                <div className="w-full lg:w-2/3">
                    <Paragraph text={mainParagraph} textClassName="text-sm" />
                    <LinksList
                        links={mainLinks}
                        linksListClass="text-blue-400"
                    />
                    <Paragraph
                        text={secondaryParagraph}
                        textClassName="text-sm"
                    />
                    <LinksList
                        links={secondaryLinks}
                        linksListClass="text-blue-400"
                    />
                </div>
                <div className="w-full lg:w-1/3 mt-3">
                    <IconMenu iconLinks={iconsLinks} />
                </div>
            </div>
        </footer>
    );
};
