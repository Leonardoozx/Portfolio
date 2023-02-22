import AuthContext from '@/context';
import useScreenDimensions from '@/hooks/useScreenDimensions';
import { useContext, useEffect, useState } from 'react';
import BurguerMenu from '../BurguerMenu';
import TypeWriterEffect from '../TypeWriterEffect';
import NavLinks from './NavLinks';
import SocialMediaLinks from './SocialMediaLinks';
import { StyledHeader, StyledNav } from './styled';

export default function Header() {
  const {
    burguerMenu: { isOpen, setBurguerMenuStatus },
  } = useContext(AuthContext);

  const screenDimensions = useScreenDimensions();

  // state for removing burguer menu from screen
  const [removeBurguerMenu, setRemoveBurguerMenu] = useState(false);

  // verifies if the screen is wider enough for removing the burguer menu from screen
  useEffect(() => {
    const verifyWidth = () => {
      if (screenDimensions.width >= 800) {
        // remove the burguer menu rendering from screen
        setRemoveBurguerMenu(true);

        // renders the burguer menu content/links in the header
        setBurguerMenuStatus(true);
      } else {
        // close burguer menu
        setBurguerMenuStatus(false);

        // renders burguer menu from screen
        setRemoveBurguerMenu(false);
      }
    };
    verifyWidth();
    // eslint is saying I need to put setRemoveBurguerMenu in the array dependency, but if I do the burguer menu for mobile will never open anymore because of line 33 where I say to close the burguer menu if screenDimensions.width < 800
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenDimensions]);
  return (
    <StyledHeader>
      <h2 id="name">
        <TypeWriterEffect strings={'Leonardo G. Urci'} />
      </h2>
      {!removeBurguerMenu && <BurguerMenu />}
      {isOpen && (
        <StyledNav>
          {/* all links to other page paths, such as '/', '/about' and '/projects' */}
          <NavLinks />

          {/* all links to other social medias */}
          <SocialMediaLinks />
        </StyledNav>
      )}
    </StyledHeader>
  );
}
