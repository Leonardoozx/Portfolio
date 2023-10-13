import AuthContext from '@/context';
import { useContext } from 'react';
import { BurguerMenuButton } from './styled';

export default function BurguerMenu() {
  const {
    burguerMenu: { isOpen, setBurguerMenuStatus },
  } = useContext(AuthContext);

  return (
    <BurguerMenuButton
      type="button"
      onClick={() => setBurguerMenuStatus(!isOpen)}
    >
      <hr className={`menu-line ${!isOpen ? '' : 'close'}`} />
      <hr className={`menu-line ${!isOpen ? '' : 'close'}`} />
      <hr className={`menu-line ${!isOpen ? '' : 'close'}`} />
    </BurguerMenuButton>
  );
}
