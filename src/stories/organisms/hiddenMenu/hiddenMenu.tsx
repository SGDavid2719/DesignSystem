import { useState } from "react";
import { Button } from "../../atoms/button/Button";
import { MenuLink, MenuLinkProps } from "../../molecules/menuLink/MenuLink";

interface HiddenMenuProps {
 menuLinks: MenuLinkProps[];
}
export const HiddenMenu = ({
  menuLinks
}: HiddenMenuProps) => {

  const [openned, setOppened] = useState(false);

  return (
  <div>
    {openned && <div className={["flex justify-between", "grid grid-cols-3 lg:grid-cols-6", "border-b"].join(" ")}>
      {menuLinks.map((menuLink) => { 
        const { href, ariaLabel, mainText, subText } = menuLink;
        return <MenuLink key={href} href={href} ariaLabel={ariaLabel} mainText={mainText} subText={subText} />
      })}
    </div>}
    <div className="flex justify-end pr-10">
      <Button label="FUEIB" renderIcon="add" align="start" onClick={() => setOppened((prevState) => !prevState)} btnClassName={"border-b border-l border-r text-[#555] hover:font-bold hover:text-black w-[6rem] justify-center"}/>
    </div>
  </div>)
};
  