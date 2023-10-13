import { ReactNode } from "react";

export interface IAuthContext {
  burguerMenu: {
    isOpen: boolean;
    setBurguerMenuStatus: (openOrClose: boolean) => void;
  };
}

export interface IAuthProvider {
  children: ReactNode;
}