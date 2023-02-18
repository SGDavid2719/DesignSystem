import {Redirect} from '../../atoms/redirect/Redirect';
import {Span} from '../../atoms/span/Span';

export interface MenuLinkProps {
    href: string;
    ariaLabel: string;
    mainText: string;
    subText: string;
    menuLinkClassName?: string;
}

export const MenuLink: React.FC<MenuLinkProps> = ({ href, ariaLabel, mainText, subText, menuLinkClassName }) => {
    return (
        <Redirect href={href} ariaLabel={ariaLabel} redirectClassName={["bg-[#f6f6f6] p-[0.75rem] m-[1rem] h-fit", menuLinkClassName].join(" ")}>
            <Span text={mainText} spanClassName='text-2xl text-center block text-[#555]'/>
            <Span text={subText} spanClassName='text-xs text-center block text-[#555]'/>
        </Redirect>
    )
}