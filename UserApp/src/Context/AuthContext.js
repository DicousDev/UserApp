import React, { createContext, useState } from "react";
export const AuthContext = createContext();

const ContextProvider = ({children}) => {
    const [token, setToken] = useState("sfdjaskcl");

    return (
        <AuthContext.Provider value={{token, setToken}}>
            {children}
        </AuthContext.Provider>
    )
}

export default ContextProvider;