import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware'

// types
interface AppStateType {
    isOrgCreated: boolean;
    accountInfo: any;
    userId: string | null;
    tenantId: string | null;
}

interface ZustandAppStateType {
    appState: AppStateType;
    setState: (appState: AppStateType) => void;
    setOrgCreated: (isOrgCreated: boolean) => void;
    setAccountInfo: (accountInfo: any) => void;
    setUserId: (userId: string) => void;
    setTenantId: (tenantId: string) => void;
}

export const useAppState = create<ZustandAppStateType>()(
    persist(
        (set) => (
            {
                appState: {
                    isOrgCreated: false,
                    accountInfo: null,
                    userId: null,
                    tenantId: null,
                },
                setState: (by) => set({ appState: by }),
                setOrgCreated: (by) => set((state) => ({ appState: {
                    isOrgCreated: by,
                    accountInfo: state.appState.accountInfo,
                    userId: state.appState.userId,
                    tenantId: state.appState.tenantId,
                }})),
                setAccountInfo: (by) => set((state) => ({ appState: {
                    isOrgCreated: state.appState.isOrgCreated,
                    accountInfo: by,
                    userId: state.appState.userId,
                    tenantId: state.appState.tenantId,
                }})),
                setUserId: (by) => set((state) => ({ appState: {
                    isOrgCreated: state.appState.isOrgCreated,
                    accountInfo: state.appState.accountInfo,
                    userId: by,
                    tenantId: state.appState.tenantId,
                }})),
                setTenantId: (by) => set((state) => ({ appState: {
                    isOrgCreated: state.appState.isOrgCreated,
                    accountInfo: state.appState.accountInfo,
                    userId: state.appState.userId,
                    tenantId: by,
                }})),
            }
        ),
        {
            name: 'app-store',
        }
    ),
);

// To get state
// const appState = useAppState((state) => state.appState);

// To call state func
// const appState = useAppState((state) => state.setState({key: value}));