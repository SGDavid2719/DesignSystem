import {Redirect} from '../../atoms/redirect/Redirect';
import {Icon} from '../../atoms/icon/Icon';

export interface IconLinkProps {
    href: string;
    ariaLabel: string;
    iconLinkClassName?: string;
    iconId: string;
}

export const IconLink: React.FC<IconLinkProps> = ({ href, ariaLabel, iconLinkClassName, iconId }) => {
    return (
        <Redirect href={href} ariaLabel={ariaLabel} redirectClassName={[iconLinkClassName].join(" ")}>
            <Icon iconId={iconId}/>
        </Redirect>
    )
}