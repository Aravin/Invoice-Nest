import { createContext } from "react";

export let tenantId: number = 0;

export const setTenantId = (tenantId: number) => {
    tenantId = tenantId;
}

export const TenantContext = createContext({tenantId, setTenantId});
