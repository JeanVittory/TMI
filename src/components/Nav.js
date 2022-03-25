const Nav = () =>{

    const handleUnderline = (e) =>{
        e.preventDefault();
        for(let i of e.target.parentNode.children){
            if(i === e.target){
                i.classList.add('active')
            }else{
                i.classList.remove('active')
            };
        };
        if(e.target.classList.contains('one')){
            e.target.parentNode.lastChild.removeAttribute('class')
            e.target.parentNode.lastChild.classList.add('underLinePosition1')
        };
        if(e.target.classList.contains('two')){
            e.target.parentNode.lastChild.removeAttribute('class')
            e.target.parentNode.lastChild.classList.add('underLinePosition2')
        };
        if(e.target.classList.contains('three')){
            e.target.parentNode.lastChild.removeAttribute('class')
            e.target.parentNode.lastChild.classList.add('underLinePosition3')
        };
    };
    return(
        <>
            <div className= "pt-14 pl-7" >
                <a href="/" className={`one  font-openSans  align-middle  mx-4  active`} onClick={handleUnderline}>Productos</a>
                <a href="/" className={`two  font-openSans  align-middle  mx-4`} onClick={handleUnderline}>Servicios</a>
                <a href="/" className={`three  font-openSans  align-middle  mx-4`} onClick={handleUnderline}>Contacto</a>
                <hr className={``} />
            </div>
            
        </>
    );
}; 

export default Nav;