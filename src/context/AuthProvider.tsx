import { useState } from 'react';
import AuthContext from '.';
import { IAuthContext, IAuthProvider } from './interface';

export default function AuthProvider({ children }: IAuthProvider) {
  // open and close the header burguer menu
  const [isBurguerMenuOpen, setIsBurguerMenuOpen] = useState(false);

  const setBurguerMenuStatus = (openOrClose: boolean): void =>
    setIsBurguerMenuOpen(openOrClose);

  const value: IAuthContext = {
    burguerMenu: {
      isOpen: isBurguerMenuOpen,
      setBurguerMenuStatus,
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
