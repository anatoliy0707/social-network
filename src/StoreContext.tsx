import React from 'react'
import store, {RootStoreType} from "./redux/redux-store";


export type ProviderType = {
    store: RootStoreType
    children: any
}

const StoreContext = React.createContext({} as RootStoreType)

export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContext