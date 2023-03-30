import { Rel } from "../../../shared/types";

export interface RedirectProps {
    /**
     * Propiedad obligatoria para indicar la dirección.
     */
    href: string;
    /**
     * Propiedad obligatoria para indicar la relación entre el documento actual y el relacionado.
     */
    rel: Rel;
    /**
     * Propiedad obligatoria para indicar un texto alternativo que aporta definición al enlace.
     */
    ariaLabel: string;
    /**
     * Propiedad opcional para indicar el contenido del componente.
     */
    children?: React.ReactNode | string;
    /**
     * Propiedad opcional para indicar el estilo.
     */
    redirectClassName?: string;
}

export const Redirect: React.FC<RedirectProps> = ({
    href,
    ariaLabel,
    children,
    redirectClassName,
    rel,
}) => {
    return (
        <a
            href={href}
            aria-label={ariaLabel}
            className={redirectClassName}
            rel={rel}
        >
            {children}
        </a>
    );
};
