import { createContext, useState } from "react";

const SettingsContext = createContext()

const SettingsProvider = ({children}) => {
    const [theme, setTheme] = useState({text: "dark", bgColor: "bg-black"})

    const darkTheme = () => setTheme({...theme, text: "dark", bgColor: "bg-black"})
    const lightTheme = () => setTheme({...theme, text: "light", bgColor: "bg-white"})

    return(
        <SettingsContext.Provider value={{theme, darkTheme, lightTheme}}>
            {children}
        </SettingsContext.Provider>
    )
}

export {SettingsContext, SettingsProvider}