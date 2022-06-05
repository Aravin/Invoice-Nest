import { createContext } from "react";

export let accountInfo: any = {};

export const setAccountInfo = (account: any) => {
    accountInfo = account;
}

export const AccountContext = createContext({accountInfo, setAccountInfo});
