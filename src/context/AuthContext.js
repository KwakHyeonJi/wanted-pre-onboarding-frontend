import { createContext, useContext, useState } from 'react'

const AuthContext = createContext('')

const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken') || null)

    const updateAccessToken = (newAccessToken) => {
        localStorage.setItem('accessToken', newAccessToken)
        setAccessToken(newAccessToken)
    }

    return <AuthContext.Provider value={{ accessToken, updateAccessToken }}>{children}</AuthContext.Provider>
}

const useAuthContext = () => {
    const value = useContext(AuthContext)
    if (value === undefined) throw new Error('useAuthContext should be used within AuthProvider')
    return value
}

export { AuthProvider, useAuthContext }
