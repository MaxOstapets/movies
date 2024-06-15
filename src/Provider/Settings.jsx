import { createContext, useState } from "react";

const SettingsContext = createContext

const SettingsProvider = ({children}) => {
    const [theme, setTheme] = useState("dark")

    const darkTheme = () => setTheme(props)
    const lightTheme = () => setTheme(props)

    return(
        <SettingsContext.Provider value={{theme, darkTheme, lightTheme}}>
            {children}
        </SettingsContext.Provider>
    )
}

export {SettingsContext, SettingsProvider}