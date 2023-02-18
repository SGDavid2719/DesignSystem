import {Redirect} from '../../atoms/Redirect/Redirect';
import {Span} from '../../atoms/Span/Span';

interface MenuLinkProps {
    href: string;
    mainText: string;
    subText: string;
}

const MenuLink: React.FC<MenuLinkProps> = ({ href, mainText, subText }) => {
    return <Redirect href={href}><Span text={mainText}/><Span text={subText}/></Redirect>
}

export default MenuLink;