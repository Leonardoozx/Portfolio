import { createContext } from 'react';
import { IAuthContext } from './interface';

const AuthContext = createContext<IAuthContext>({
  burguerMenu: {
    isOpen: false,
    setBurguerMenuStatus: () => {}
  }
});

export default AuthContext;
