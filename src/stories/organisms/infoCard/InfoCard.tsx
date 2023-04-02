import { Icon } from "../../atoms/icon/Icon";
import { Paragraph } from "../../atoms/paragraph/Paragraph";
import { Redirect, RedirectProps } from "../../atoms/redirect/Redirect";
import { Time } from "../../molecules/time/Time";
import { ImageLink, ImageLinkProps } from "../../molecules/imageLink/ImageLink";

interface InfoCardProps {
    /**
     * Propiedad obligatoria para indicar la imagen principal como enlace con sus propiedades pertinentes.
     */
    cardPhoto: ImageLinkProps;
    /**
     * Propiedad obligatoria para indicar la fecha.
     */
    dateTime: Date;
    /**
     * Propiedad obligatoria para indicar el enlace principal con sus propiedades pertinentes.
     */
    mainRedirect: RedirectProps;
    /**
     * Propiedad obligatoria para indicar el enlace secundario con sus propiedades pertinentes.
     */
    secondaryRedirect: RedirectProps;
    /**
     * Propiedad obligatoria para indicar el texto informativo.
     */
    text: string;
    /**
     * Propiedad obligatoria para indicar el icono del pie de tarjeta.
     */
    iconId: string;
    /**
     * Propiedad opcional para modificar el estilo de la tarjeta.
     */
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
            <div className="flex gap-2 p-4 bottom-0">
                <Icon iconId={iconId} iconClassName="mt-1" />
                <Redirect
                    {...secondaryRedirect}
                    redirectClassName="hover:text-blue-600 hover:font-semibold"
                />
            </div>
        </div>
    );
};
