import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [accessToken, setAccessToken] = useState(null);
    const [role, setRole] = useState(null);

    return (
        <AuthContext.Provider value={{accessToken, setAccessToken, role, setRole}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;