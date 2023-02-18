import {Redirect} from '../../atoms/Redirect/Redirect';
import {Span} from '../../atoms/Span/Span';

export interface MenuLinkProps {
    href: string;
    mainText: string;
    subText: string;
    menuLinkClassName?: string;
}

export const MenuLink: React.FC<MenuLinkProps> = ({ href, mainText, subText, menuLinkClassName }) => {
    return (
        <Redirect href={href} redirectClassName={["bg-[#f6f6f6] p-[0.75rem] m-[1rem] h-fit", menuLinkClassName].join(" ")}>
            <Span text={mainText} spanClassName='text-2xl text-center block text-[#555]'/>
            <Span text={subText} spanClassName='text-xs text-center block text-[#555]'/>
        </Redirect>
    )
}