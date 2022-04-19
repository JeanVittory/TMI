import FooterContext from "./FooterContext"
import HeaderContext from "./HeaderContext"
import MainContext from "./MainContext"
import { useState } from "react"
import { ThemeProvider } from "../context/ThemeContext"

const translations = {
    es: {
        headerTitle: '"Mi aplicación CON context API',
        headerSubtitle: 'Mi Cabecera',
        headerLight: ' Claro',
        headerDark: 'Oscuro',
        buttonLogin: 'iniciar Sesión', 
        buttonLogout: 'Cerrar Sesión',
        mainWelcome: 'Bienvenidx',
        mainHello: 'Hola Usuari@',
        mainContent: 'Mi contenido Principal',
        footerTitle: 'mi pié de página'
    },
    en: {
        headerTitle: '"My application WITH context API',
        headerSubtitle: 'My Header',
        headerLight: 'Light',
        headerDark: 'Dark',
        buttonLogin: 'login',
        buttonLogout: 'Logout',
        mainWelcome: 'Welcome',
        mainHello: 'Hello User',
        mainContent: 'My Main Content',
        footerTitle: 'my footer'
    }
}

const MyPageContext = () => {

    const [language, setLanguage] = useState('es')
    const [texts, setTexts] = useState(translations[language])


    const handleLanguage = (e) =>{
        setLanguage(e.target.value)
        setTexts(translations[e.target.value])
    }
    
  return (
    <div className= 'my-page'>
        <ThemeProvider>  
            <HeaderContext texts = {texts} handleLanguage = {handleLanguage}/>
            <MainContext texts = {texts}/> 
            <FooterContext texts = {texts}/>
        </ThemeProvider>
    </div>
  )
}

export default MyPageContext