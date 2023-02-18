interface RedirectProps {
    href: string;
    children: React.ReactNode;
}

export const Redirect: React.FC<RedirectProps> = ({ href, children }) => {
    return <a href={href}>{children}</a>
}