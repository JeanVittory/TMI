import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext';

const HeaderContext = ({texts, handleLanguage}) => {

  const {theme, handleTheme} = useContext(ThemeContext)
  return (
    <header className={theme}>
        <h2>{texts.headerTitle}</h2>
        <h3>{texts.headerSubtitle}</h3>
        <select name="language" onChange={handleLanguage}>
            <option value="es">ES</option>
            <option value="en">EN</option>
        </select>
        <input type="radio" name='theme' id='lightContext' value='light' onClick={handleTheme}/>
        <label htmlFor='lightContext'>{texts.headerLight}</label>
        <input type="radio" name='theme' id='darkContext' value='dark' onClick={handleTheme}/>
        <label htmlFor='darkContext'>{texts.headerDark}</label>
        <button>{texts.buttonLogin}{texts.buttonLogout}</button>
    </header>   
  )
}

export default HeaderContext;