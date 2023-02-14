interface RedirectProps {
    href: string;
    children: React.ReactNode;
}

const Redirect: React.FC<RedirectProps> = ({ href, children }) => {
    return <a href={href}>{children}</a>
}

export default Redirect;