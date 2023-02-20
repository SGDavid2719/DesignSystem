import { Button } from "../../atoms/button/Button"
import { Redirect } from "../../atoms/redirect/Redirect"
import { ImageLink } from "../../molecules/imageLink/ImageLink"
import { HiddenMenu } from "../../organisms/hiddenMenu/HiddenMenu"
import { IconMenu } from "../../organisms/iconMenu/IconMenu"
import { NavBar } from "../../organisms/navBar/NavBar"


export const DoipPage = () => {

    const menuLinks = [
        {
            href: "link1",
            ariaLabel: "link1",
            mainText: "Deporte",
            subText: "a la UIB"
        },
        {
            href: "link2",
            ariaLabel: "link2",
            mainText: "Residencia",
            subText: "de Estudiants"
        },
        {
            href: "link3",
            ariaLabel: "link3",
            mainText: "OTRI",
            subText: "y Proyectos"
        },
        {
            href: "link4",
            ariaLabel: "link4",
            mainText: "UIBCongrés",
            subText: "Events Management"
        },
        {
            href: "link5",
            ariaLabel: "link5",
            mainText: "Orientación",
            subText: "e Inserción Profesional"
        },
        {
            href: "link6",
            ariaLabel: "link6",
            mainText: "UIBdigital",
            subText: "acceso usuarios"
        }
    ]

    const imageLink = {
        href: "href",
        ariaLabel: "logo",
        src: "/assets/logo.png",
        alt: "logo"
    }

    const iconsLink = [
        {
            href: "link1",
            ariaLabel: "link1",
            iconId: "home"
        },
        {
            href: "link2",
            ariaLabel: "link2",
            iconId: "magnifying-glass"
        },
        {
            href: "link3",
            ariaLabel: "link3",
            iconId: "facebook"
        },
        {
            href: "link4",
            ariaLabel: "link4",
            iconId: "twitter"
        },
        {
            href: "link5",
            ariaLabel: "link5",
            iconId: "youtube"
        },
        {
            href: "link6",
            ariaLabel: "link6",
            iconId: "instagram"
        }
    ]

    const yearsRedirect = {
        href: "/",
        ariaLabel: "25añosFUEIB",
        children: "#25añosFUEIB"
    };

    const mainLinks = [
        {
            href: "link1",
            ariaLabel: "link1",
            mainText: "DOIP",
            subText: "saber más",
            subSections: [
              {
                href: "string",
                ariaLabel: "ariaLabel",
                children: "¿Qué hacemos?"
              },
              {
                href: "string",
                ariaLabel: "ariaLabel",
                children: "¿Quiénes somos?"
              },
              {
                href: "string",
                ariaLabel: "ariaLabel",
                children: "Ubicación y horarios"
              },
              {
                href: "string",
                ariaLabel: "ariaLabel",
                children: "Datos y cifras"
              },
              {
                href: "string",
                ariaLabel: "ariaLabel",
                children: "Datos y cifras mensuales"
              },
              {
                href: "string",
                ariaLabel: "ariaLabel",
                children: "Noticias del DOIP"
              }
            ]
        },
        {
            href: "link2",
            ariaLabel: "link2",
            mainText: "Universitarios",
            subText: "estudiantes y titulados",
            subSections: [
              {
                href: "string",
                ariaLabel: "ariaLabel",
                children: "Alta/Acceso DOIP"
              },
              {
                href: "string",
                ariaLabel: "ariaLabel",
                children: "Tablón de ofertas"
              },
              {
                href: "string",
                ariaLabel: "ariaLabel",
                children: "Prácticas y empleo"
              },
              {
                href: "string",
                ariaLabel: "ariaLabel",
                children: "Preguntas frecuentes"
              },
              {
                href: "string",
                ariaLabel: "ariaLabel",
                children: "Condiciones y normativa"
              },
              {
                href: "string",
                ariaLabel: "ariaLabel",
                children: "Decálogo del estudiante en prácticas"
              }
            ]
        },
        {
            href: "link3",
            ariaLabel: "link3",
            mainText: "Empresas",
            subText: "y entidades",
            subSections: [
                {
                    href: "string",
                    ariaLabel: "ariaLabel",
                    children: "Alta/Acceso DOIP"
                },
                {
                    href: "string",
                    ariaLabel: "ariaLabel",
                    children: "Busca candidatos"
                },
                {
                    href: "string",
                    ariaLabel: "ariaLabel",
                    children: "Preguntas frecuentes"
                },
                {
                    href: "string",
                    ariaLabel: "ariaLabel",
                    children: "Condiciones, costes y normativa"
                },
            ]
        },
        {
            href: "link4",
            ariaLabel: "link4",
            mainText: "JOB DAY UIB",
            subText: "Foro de la ocupación",
        },
        {
            href: "link5",
            ariaLabel: "link5",
            mainText: "Orientación profesional",
            subText: "en mallorca, menorca y pituisas",
            subSections: [
              {
                href: "string",
                ariaLabel: "ariaLabel",
                children: "¿Qué es el servicio de Orientación profesional?"
              },
              {
                href: "string",
                ariaLabel: "ariaLabel",
                children: "Pide una cita al servicio de orientación"
              },
              {
                href: "string",
                ariaLabel: "ariaLabel",
                children: "Recursos útiles"
              },
              {
                href: "string",
                ariaLabel: "ariaLabel",
                children: "Asesoramiento en oposiciones"
              },
              {
                href: "string",
                ariaLabel: "ariaLabel",
                children: "Cápsula de éxito profesional"
              }
            ]
        },
        {
            href: "link6",
            ariaLabel: "link6",
            mainText: "Cápsulas",
            subText: "de éxito profesional"
        },
        {
            href: "link7",
            ariaLabel: "link7",
            mainText: "Blog",
            subText: "del DOIP"
        }
    ];

    const sections = [
        {
            title: "Universitaris",
            sectionLinks: [
                {
                    href: "link1",
                    ariaLabel: "link1",
                    mainText: "Deporte",
                    subText: "a la UIB"
                },
                {
                    href: "link2",
                    ariaLabel: "link2",
                    mainText: "Residencia",
                    subText: "de Estudiants"
                },
                {
                    href: "link3",
                    ariaLabel: "link3",
                    mainText: "OTRI",
                    subText: "y Proyectos"
                },
                {
                    href: "link4",
                    ariaLabel: "link4",
                    mainText: "UIBCongrés",
                    subText: "Events Management"
                },
                {
                    href: "link5",
                    ariaLabel: "link5",
                    mainText: "Orientación",
                    subText: "e Inserción Profesional"
                },
                {
                    href: "link6",
                    ariaLabel: "link6",
                    mainText: "UIBdigital",
                    subText: "acceso usuarios"
                },
                {
                    href: "link7",
                    ariaLabel: "link7",
                    mainText: "UIBdigital",
                    subText: "acceso usuarios"
                }
            ]
        },
        {
            title: "Universitaris",
            sectionLinks: [
                {
                    href: "link1",
                    ariaLabel: "link1",
                    mainText: "Deporte",
                    subText: "a la UIB"
                },
                {
                    href: "link2",
                    ariaLabel: "link2",
                    mainText: "Residencia",
                    subText: "de Estudiants"
                },
                {
                    href: "link3",
                    ariaLabel: "link3",
                    mainText: "OTRI",
                    subText: "y Proyectos"
                },
                {
                    href: "link4",
                    ariaLabel: "link4",
                    mainText: "UIBCongrés",
                    subText: "Events Management"
                },
                {
                    href: "link5",
                    ariaLabel: "link5",
                    mainText: "Orientación",
                    subText: "e Inserción Profesional"
                },
                {
                    href: "link6",
                    ariaLabel: "link6",
                    mainText: "UIBdigital",
                    subText: "acceso usuarios"
                },
                {
                    href: "link7",
                    ariaLabel: "link7",
                    mainText: "UIBdigital",
                    subText: "acceso usuarios"
                }
            ]
        },
        {
            title: "Universitaris",
            sectionLinks: [
                {
                    href: "link1",
                    ariaLabel: "link1",
                    mainText: "Deporte",
                    subText: "a la UIB"
                },
                {
                    href: "link2",
                    ariaLabel: "link2",
                    mainText: "Residencia",
                    subText: "de Estudiants"
                },
                {
                    href: "link3",
                    ariaLabel: "link3",
                    mainText: "OTRI",
                    subText: "y Proyectos"
                },
                {
                    href: "link4",
                    ariaLabel: "link4",
                    mainText: "UIBCongrés",
                    subText: "Events Management"
                },
                {
                    href: "link5",
                    ariaLabel: "link5",
                    mainText: "Orientación",
                    subText: "e Inserción Profesional"
                },
                {
                    href: "link6",
                    ariaLabel: "link6",
                    mainText: "UIBdigital",
                    subText: "acceso usuarios"
                },
                {
                    href: "link7",
                    ariaLabel: "link7",
                    mainText: "UIBdigital",
                    subText: "acceso usuarios"
                }
            ]
        },
        {
            title: "Universitaris",
            sectionLinks: [
                {
                    href: "link1",
                    ariaLabel: "link1",
                    mainText: "Deporte",
                    subText: "a la UIB"
                },
                {
                    href: "link2",
                    ariaLabel: "link2",
                    mainText: "Residencia",
                    subText: "de Estudiants"
                },
                {
                    href: "link3",
                    ariaLabel: "link3",
                    mainText: "OTRI",
                    subText: "y Proyectos"
                },
                {
                    href: "link4",
                    ariaLabel: "link4",
                    mainText: "UIBCongrés",
                    subText: "Events Management"
                },
                {
                    href: "link5",
                    ariaLabel: "link5",
                    mainText: "Orientación",
                    subText: "e Inserción Profesional"
                },
                {
                    href: "link6",
                    ariaLabel: "link6",
                    mainText: "UIBdigital",
                    subText: "acceso usuarios"
                },
                {
                    href: "link7",
                    ariaLabel: "link7",
                    mainText: "UIBdigital",
                    subText: "acceso usuarios"
                }
            ]
        }
      ]

    return (
        <div className="bg-[#f9f9f9]">
            <header>
                <HiddenMenu menuLinks={menuLinks} />
                <div className="flex my-10 px-10">
                    <div className="w-2/3">
                        <ImageLink  {...imageLink} imageClassName="h-[5rem]"/>
                    </div>
                    <div className="w-1/3">
                        <div>
                            <IconMenu iconLinks={iconsLink}/>
                        </div>
                        <div className="mt-4 flex justify-end gap-4">
                            <Redirect {...yearsRedirect} redirectClassName="hover:text-blue-600 self-center"/>
                            <Button label="Español" btnClassName="hover:text-blue-600"/>
                            <Button label="Catalán" btnClassName="hover:text-blue-600"/>
                        </div>
                    </div>
                </div>
                <div className="border-y">
                    <NavBar mainLinks={mainLinks} sections={sections}/>
                </div>
            </header>
        </div>
    )
    
}