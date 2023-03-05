import { Button } from "../../atoms/button/Button";
import { Image } from "../../atoms/image/Image";
import { Redirect } from "../../atoms/redirect/Redirect";
import { ImageLink } from "../../molecules/imageLink/ImageLink";
import { Footer } from "../../organisms/footer/Footer";
import { HiddenMenu } from "../../organisms/hiddenMenu/HiddenMenu";
import { IconMenu } from "../../organisms/iconMenu/IconMenu";
import { InfoCard } from "../../organisms/infoCard/InfoCard";
import { NavBar } from "../../organisms/navBar/NavBar";
import { OffersList } from "../../organisms/offersList/OffersList";

export const DoipPage = () => {
    const menuLinks = [
        {
            href: "/?path=/story/pages-notfoundpage--default",
            ariaLabel: "link1",
            mainText: "Deporte",
            subText: "a la UIB",
        },
        {
            href: "/?path=/story/pages-notfoundpage--default",
            ariaLabel: "link2",
            mainText: "Residencia",
            subText: "de Estudiants",
        },
        {
            href: "/?path=/story/pages-notfoundpage--default",
            ariaLabel: "link3",
            mainText: "OTRI",
            subText: "y Proyectos",
        },
        {
            href: "/?path=/story/pages-notfoundpage--default",
            ariaLabel: "link4",
            mainText: "UIBCongrés",
            subText: "Events Management",
        },
        {
            href: "/?path=/story/pages-notfoundpage--default",
            ariaLabel: "link5",
            mainText: "Orientación",
            subText: "e Inserción Profesional",
        },
        {
            href: "/?path=/story/pages-notfoundpage--default",
            ariaLabel: "link6",
            mainText: "UIBdigital",
            subText: "acceso usuarios",
        },
    ];

    const logoLink = {
        href: "/?path=/story/pages-notfoundpage--default",
        ariaLabel: "logo",
        src: "./assets/logo.png",
        alt: "logo",
    };

    const iconsLink = [
        {
            href: "/?path=/story/pages-notfoundpage--default",
            ariaLabel: "link1",
            iconId: "home",
        },
        {
            href: "/?path=/story/pages-notfoundpage--default",
            ariaLabel: "link2",
            iconId: "magnifying-glass",
        },
        {
            href: "/?path=/story/pages-notfoundpage--default",
            ariaLabel: "link3",
            iconId: "facebook",
        },
        {
            href: "/?path=/story/pages-notfoundpage--default",
            ariaLabel: "link4",
            iconId: "twitter",
        },
        {
            href: "/?path=/story/pages-notfoundpage--default",
            ariaLabel: "link5",
            iconId: "youtube",
        },
        {
            href: "/?path=/story/pages-notfoundpage--default",
            ariaLabel: "link6",
            iconId: "instagram",
        },
    ];

    const yearsRedirect = {
        href: "/",
        ariaLabel: "25añosFUEIB",
        children: "#25añosFUEIB",
    };

    const mainLinks = [
        {
            href: "/?path=/story/pages-notfoundpage--default",
            ariaLabel: "link1",
            mainText: "DOIP",
            subText: "saber más",
            subSections: [
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "ariaLabel",
                    children: "¿Qué hacemos?",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "ariaLabel",
                    children: "¿Quiénes somos?",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "ariaLabel",
                    children: "Ubicación y horarios",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "ariaLabel",
                    children: "Datos y cifras",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "ariaLabel",
                    children: "Datos y cifras mensuales",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "ariaLabel",
                    children: "Noticias del DOIP",
                },
            ],
        },
        {
            href: "/?path=/story/pages-notfoundpage--default",
            ariaLabel: "link2",
            mainText: "Universitarios",
            subText: "estudiantes y titulados",
            subSections: [
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "ariaLabel",
                    children: "Alta/Acceso DOIP",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "ariaLabel",
                    children: "Tablón de ofertas",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "ariaLabel",
                    children: "Prácticas y empleo",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "ariaLabel",
                    children: "Preguntas frecuentes",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "ariaLabel",
                    children: "Condiciones y normativa",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "ariaLabel",
                    children: "Decálogo del estudiante en prácticas",
                },
            ],
        },
        {
            href: "/?path=/story/pages-notfoundpage--default",
            ariaLabel: "link3",
            mainText: "Empresas",
            subText: "y entidades",
            subSections: [
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "ariaLabel",
                    children: "Alta/Acceso DOIP",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "ariaLabel",
                    children: "Busca candidatos",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "ariaLabel",
                    children: "Preguntas frecuentes",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "ariaLabel",
                    children: "Condiciones, costes y normativa",
                },
            ],
        },
        {
            href: "/?path=/story/pages-notfoundpage--default",
            ariaLabel: "link4",
            mainText: "JOB DAY UIB",
            subText: "Foro de la ocupación",
        },
        {
            href: "/?path=/story/pages-notfoundpage--default",
            ariaLabel: "link5",
            mainText: "Orientación profesional",
            subText: "en mallorca, menorca y pituisas",
            subSections: [
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "ariaLabel",
                    children: "¿Qué es el servicio de Orientación profesional?",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "ariaLabel",
                    children: "Pide una cita al servicio de orientación",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "ariaLabel",
                    children: "Recursos útiles",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "ariaLabel",
                    children: "Asesoramiento en oposiciones",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "ariaLabel",
                    children: "Cápsula de éxito profesional",
                },
            ],
        },
        {
            href: "/?path=/story/pages-notfoundpage--default",
            ariaLabel: "link6",
            mainText: "Cápsulas",
            subText: "de éxito profesional",
        },
        {
            href: "/?path=/story/pages-notfoundpage--default",
            ariaLabel: "link7",
            mainText: "Blog",
            subText: "del DOIP",
        },
    ];

    const sections = [
        {
            title: "Universitaris",
            sectionLinks: [
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "link1",
                    mainText: "Deporte",
                    subText: "a la UIB",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "link2",
                    mainText: "Residencia",
                    subText: "de Estudiants",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "link3",
                    mainText: "OTRI",
                    subText: "y Proyectos",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "link4",
                    mainText: "UIBCongrés",
                    subText: "Events Management",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "link5",
                    mainText: "Orientación",
                    subText: "e Inserción Profesional",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "link6",
                    mainText: "UIBdigital",
                    subText: "acceso usuarios",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "link7",
                    mainText: "UIBdigital",
                    subText: "acceso usuarios",
                },
            ],
        },
        {
            title: "Universitaris",
            sectionLinks: [
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "link1",
                    mainText: "Deporte",
                    subText: "a la UIB",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "link2",
                    mainText: "Residencia",
                    subText: "de Estudiants",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "link3",
                    mainText: "OTRI",
                    subText: "y Proyectos",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "link4",
                    mainText: "UIBCongrés",
                    subText: "Events Management",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "link5",
                    mainText: "Orientación",
                    subText: "e Inserción Profesional",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "link6",
                    mainText: "UIBdigital",
                    subText: "acceso usuarios",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "link7",
                    mainText: "UIBdigital",
                    subText: "acceso usuarios",
                },
            ],
        },
        {
            title: "Universitaris",
            sectionLinks: [
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "link1",
                    mainText: "Deporte",
                    subText: "a la UIB",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "link2",
                    mainText: "Residencia",
                    subText: "de Estudiants",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "link3",
                    mainText: "OTRI",
                    subText: "y Proyectos",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "link4",
                    mainText: "UIBCongrés",
                    subText: "Events Management",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "link5",
                    mainText: "Orientación",
                    subText: "e Inserción Profesional",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "link6",
                    mainText: "UIBdigital",
                    subText: "acceso usuarios",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "link7",
                    mainText: "UIBdigital",
                    subText: "acceso usuarios",
                },
            ],
        },
        {
            title: "Universitaris",
            sectionLinks: [
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "link1",
                    mainText: "Deporte",
                    subText: "a la UIB",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "link2",
                    mainText: "Residencia",
                    subText: "de Estudiants",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "link3",
                    mainText: "OTRI",
                    subText: "y Proyectos",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "link4",
                    mainText: "UIBCongrés",
                    subText: "Events Management",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "link5",
                    mainText: "Orientación",
                    subText: "e Inserción Profesional",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "link6",
                    mainText: "UIBdigital",
                    subText: "acceso usuarios",
                },
                {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "link7",
                    mainText: "UIBdigital",
                    subText: "acceso usuarios",
                },
            ],
        },
    ];

    /**
     * MAIN
     */

    const departmentImage = {
        src: "./assets/departOrient.png",
        alt: "Departamento orientación",
    };

    const offersLink = {
        href: "/?path=/story/pages-notfoundpage--default",
        ariaLabel: "logo",
        src: "./assets/tableroOfertas.png",
        alt: "Tablero ofertas",
    };

    const doipLogos = {
        src: "./assets/logosDoip.png",
        alt: "Logos DOIP",
    };

    const firstInfoCard = {
        cardPhoto: {
            href: "/?path=/story/pages-notfoundpage--default",
            ariaLabel: "logo",
            src: "./assets/infoImage.png",
            alt: "logo",
        },
        dateTime: new Date(2023, 2, 22),
        mainRedirect: {
            href: "/?path=/story/pages-notfoundpage--default",
            ariaLabel: "mainRedirect",
            children:
                "1.256 ofertas de trabajo y 589 prácticas extracurriculares, balance del DOIP durante el curso 2021-22",
        },
        secondaryRedirect: {
            href: "/?path=/story/pages-notfoundpage--default",
            ariaLabel: "secondaryRedirect",
            children: "Doip",
        },
        text: "Durante el curso 2021-22, 589 estudiantes han podido realizar prácticas extracurriculares a empresas y se han gestionado 1.256 ofertas laborales. El número de contratos laborales firmados de los que se tiene constancia es de 197.",
        iconId: "tags",
    };

    const secondInfoCard = {
        cardPhoto: {
            href: "/?path=/story/pages-notfoundpage--default",
            ariaLabel: "logo",
            src: "./assets/infoImage2.png",
            alt: "logo",
        },
        dateTime: new Date(2023, 1, 19),
        mainRedirect: {
            href: "/?path=/story/pages-notfoundpage--default",
            ariaLabel: "mainRedirect",
            children:
                "La FUEIB da a conocer la Residencia de Estudiantes, el DOIP y CampusEsport en Ibiza",
        },
        secondaryRedirect: {
            href: "/?path=/story/pages-notfoundpage--default",
            ariaLabel: "secondaryRedirect",
            children: "Doip",
        },
        text: "La Fundación Universidad Empresa de las Islas Baleares MP participa hoy en la jornada de puertas abiertas de la sede universitaria de Eivissa.",
        iconId: "tags",
    };

    const offersList = {
        offerLinks: [
            {
                offerRedirect: {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "offerRedirect",
                    children: "Sales Development Representative",
                },
                offerName: "Oferta de trabajo",
                placeName: "Islas Baleares, España",
                publicationDate: new Date(2023, 2, 24),
                referenceNumber: 10742,
            },
            {
                offerRedirect: {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "offerRedirect",
                    children: "Back office Dpto Expansión (sector hotelero)",
                },
                offerName: "Oferta de trabajo",
                placeName: "Islas Baleares, España",
                publicationDate: new Date(2023, 2, 20),
                referenceNumber: 10743,
            },
            {
                offerRedirect: {
                    href: "/?path=/story/pages-notfoundpage--default",
                    ariaLabel: "offerRedirect",
                    children: "JOB DAY UIB 2023 - Administativo/a",
                },
                offerName: "Oferta de trabajo",
                placeName: "Islas Baleares, España",
                publicationDate: new Date(2023, 2, 20),
                referenceNumber: 10744,
            },
        ],
        redirect: {
            href: "/?path=/story/pages-notfoundpage--default",
            ariaLabel: "mainRedirect",
            children: "... visualiza todas las ofertas",
        },
    };

    /**
     * FOOTER
     */

    const footer = {
        officesList: [
            {
                name: "DOIP Campus",
                location:
                    "Ctra. de Valldemossa, km 7.5 (Edificio Instalaciones Deportivas, Campus UIB). 07122 Palma, Illes Balears (España)",
                phoneNumber: "(+34) 971259697",
                email: "doip@fueib.org",
                schedules: ["Lu-Ju: 08:00-15:30", "Vi: 08:00-15:00"],
            },
            {
                name: "DOIP Menorca",
                location:
                    "Calle de Santa Rita 11 (Sede universitaria de Menorca) . 07730 Alaior, Illes Balears (España)",
                phoneNumber: "(+34) 661280318",
                email: "josep.capo@fueib.org",
                schedules: [
                    "Lu-Ma: 08:00-15:30",
                    "Mi: 09:00-16:30",
                    "Ju-Vi: 09:00-15:30",
                ],
            },
            {
                name: "DOIP Pitiüses",
                location:
                    "Calle Calvari,1 (Antiguo Edificio de la Comandancia). 07800 Ibiza, Illes Balears (España)",
                phoneNumber: "(+34) 661281650",
                email: "carla.blancafort@fueib.org",
                schedules: ["Lu: 09:00-16:30", "Ma-Vi: 08:00-15:30"],
            },
            {
                name: "DOIP Palma",
                location:
                    "Calle Miquel de Sants i Oliver, 2 (Edificio Sa Riera). 07012 Palma, Illes Balears (España)",
                phoneNumber: "(+34) 971173302",
                email: "orientacio@fueib.org",
                schedules: [
                    "Lu-Mi: 08:00-15:30",
                    "Ju: 08:00-17:00",
                    "Vi: 08:00-15:00",
                ],
            },
        ],
        mainParagraph:
            "© 2023. Fundació Universitat-Empresa de les Illes Balears MP. CIF: G07779895",
        secondaryParagraph: "Agencia de colocación nº0400000007",
        iconsLinks: [
            {
                href: "link1",
                ariaLabel: "link1",
                iconId: "home",
                iconLinkClassName: "text-blue-400",
            },
            {
                href: "link2",
                ariaLabel: "link2",
                iconId: "magnifying-glass",
                iconLinkClassName: "text-blue-400",
            },
            {
                href: "link3",
                ariaLabel: "link3",
                iconId: "facebook",
                iconLinkClassName: "text-blue-400",
            },
            {
                href: "link4",
                ariaLabel: "link4",
                iconId: "twitter",
                iconLinkClassName: "text-blue-400",
            },
            {
                href: "link5",
                ariaLabel: "link5",
                iconId: "youtube",
                iconLinkClassName: "text-blue-400",
            },
            {
                href: "link6",
                ariaLabel: "link6",
                iconId: "instagram",
                iconLinkClassName: "text-blue-400",
            },
        ],
        mainLinks: [
            {
                href: "string22",
                children: "Aviso legal",
                ariaLabel: "Aviso legal",
            },
            {
                href: "string23",
                children: "Política de privacidad",
                ariaLabel: "Política de privacidad",
            },
            {
                href: "string24",
                children: "Mapa de contenidos",
                ariaLabel: "Mapa de contenidos",
            },
        ],
        secondaryLinks: [
            {
                href: "string25",
                children: "Política de cookies (galetes)",
                ariaLabel: "Política de cookies (galetes)",
            },
            {
                href: "string26",
                children: "Configurar cookies (galetes)",
                ariaLabel: "Configurar cookies (galetes)",
            },
        ],
    };

    return (
        <div className="bg-[#f9f9f9]">
            <header>
                <HiddenMenu menuLinks={menuLinks} />
                <div className="flex my-10 px-10">
                    <div className="w-2/3">
                        <ImageLink {...logoLink} imageClassName="h-[5rem]" />
                    </div>
                    <div className="w-1/3">
                        <div>
                            <IconMenu iconLinks={iconsLink} />
                        </div>
                        <div className="mt-4 flex justify-end gap-4">
                            <Redirect
                                {...yearsRedirect}
                                redirectClassName="hover:text-blue-600 self-center"
                            />
                            <Button
                                label="Español"
                                btnClassName="hover:text-blue-600"
                            />
                            <Button
                                label="Catalán"
                                btnClassName="hover:text-blue-600"
                            />
                        </div>
                    </div>
                </div>
                <div className="border-t m-1">
                    <NavBar mainLinks={mainLinks} sections={sections} />
                </div>
            </header>
            <main>
                <div className="block lg:flex">
                    <div className="w-full flex lg:block lg:w-1/3 p-10">
                        <Image
                            {...departmentImage}
                            imageClassName="w-1/2 lg:w-full"
                        />
                        <ImageLink
                            {...offersLink}
                            linkClassName="w-1/2 lg:w-full"
                        />
                    </div>
                    <div className="w-full lg:w-2/3">
                        <p>PENDING</p>
                    </div>
                </div>
                <div>
                    <h1 className="uppercase text-xl text-center">
                        Actualidad
                    </h1>
                </div>
                <div className="p-8 block md:flex gap-3">
                    <div className="block sm:flex gap-3 w-full lg:w-2/3 mt-4">
                        <InfoCard {...firstInfoCard} />
                        <InfoCard {...secondInfoCard} />
                    </div>
                    <div className="w-full md:w-1/3 mt-4">
                        <OffersList {...offersList} />
                    </div>
                </div>
                <div>
                    <h2 className="uppercase text-xl text-center">
                        Con la colaboración de
                    </h2>
                </div>
                <div className="p-8">
                    <Image {...doipLogos} />
                </div>
            </main>
            <Footer {...footer} />
        </div>
    );
};
