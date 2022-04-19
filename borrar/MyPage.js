import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"
import { useState } from "react"

const translations = {
    es: {
        headerTitle: '"Mi aplicación SIN context API',
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
        headerTitle: '"My application WITHOUT context API',
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

const MyPage = () => {
    const [theme, setTheme] = useState('light');
    const [language, setLanguage] = useState('es')
    const [texts, setTexts] = useState(translations[language])

    const handleTheme = (e) =>{
        setTheme(e.target.value)
    }

    const handleLanguage = (e) =>{
        setLanguage(e.target.value)
        setTexts(translations[e.target.value])
    }
    
  return (
    <div className= 'my-page'>
        <Header theme= {theme} handleTheme = {handleTheme} texts = {texts} handleLanguage = {handleLanguage}/>
        <Main theme= {theme} texts = {texts}/> 
        <Footer theme= {theme} texts = {texts}/>
    </div>
  )
}

export default MyPage