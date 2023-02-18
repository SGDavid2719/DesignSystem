interface RedirectProps {
    href: string;
    children: React.ReactNode;
    redirectClassName?: string;
}

export const Redirect: React.FC<RedirectProps> = ({ href, children, redirectClassName }) => {
    return <a href={href} className={redirectClassName}>{children}</a>
}