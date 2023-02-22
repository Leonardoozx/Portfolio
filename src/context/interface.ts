import { ReactNode } from "react";

export interface IAuthContext {
  burguerMenu: {
    isOpen: boolean;
    setBurguerMenuStatus: () => void;
  };
}

export interface IAuthProvider {
  children: ReactNode;
}