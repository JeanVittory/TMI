import React from 'react'

const FooterContext = ({theme, texts}) => {
  return (
    <footer className={theme}>
        <h4>{texts.footerTitle}</h4>
    </footer>
  )
}

export default FooterContext;