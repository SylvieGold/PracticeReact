import React, { createContext, useState } from 'react'

export const MiracleContext = createContext()

function ContextHolder({children}) {
    let [theme, setTheme] = useState(()=>{
        let savedTheme = sessionStorage.getItem('theme') || false
        return JSON.parse(savedTheme)  
    })

    let toggleTheme =()=>{
        let themeChoice = !theme
        setTheme(themeChoice)

        localStorage.setItem("theme", JSON.stringify(themeChoice))
    }

  return (
    <MiracleContext.Provider value={{theme, toggleTheme}}>
        {children}
    </MiracleContext.Provider>
  )
}

export default ContextHolder