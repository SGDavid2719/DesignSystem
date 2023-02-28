export interface RedirectProps {
    href: string;
    ariaLabel: string;
    children: React.ReactNode | string;
    redirectClassName?: string;
}

export const Redirect: React.FC<RedirectProps> = ({ href, ariaLabel, children, redirectClassName}) => {
    return <a href={href} aria-label={ariaLabel} className={redirectClassName}>{children}</a>
}