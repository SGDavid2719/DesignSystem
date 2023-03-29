import { Rel } from "../../../shared/types";

export interface RedirectProps {
    href: string;
    rel: Rel;
    ariaLabel: string;
    children: React.ReactNode | string;
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
