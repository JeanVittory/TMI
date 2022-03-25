import {useState} from 'react';

const Nav = () =>{

    const [underLinePosition, setUnderLinePosition] = useState('underLinePosition1');

    const handleUnderline = (e) =>{
        e.preventDefault();
        for(let i of e.target.parentNode.children){
            if(i === e.target){
                i.classList.add('active');
            }else{
                i.classList.remove('active');
            };
        };
        if(e.target.classList.contains('one')){
            setUnderLinePosition('underLinePosition1');
            e.target.parentNode.lastChild.removeAttribute('class');
            e.target.parentNode.lastChild.classList.add(underLinePosition);
            return;
        };
        if(e.target.classList.contains('two')){
            setUnderLinePosition('underLinePosition2')
            e.target.parentNode.lastChild.removeAttribute('class');
            e.target.parentNode.lastChild.classList.add(underLinePosition);
            return;
        };
        if(e.target.classList.contains('three')){
            setUnderLinePosition('underLinePosition3');
            e.target.parentNode.lastChild.removeAttribute('class');
            e.target.parentNode.lastChild.classList.add(underLinePosition);
            return;
        };
    };
    
    return(
        <>
            <div className= "pt-14 pl-7" >
                <a href="/" className={`one  font-openSans  align-middle  mx-4  active`} onClick={handleUnderline}>Productos</a>
                <a href="/" className={`two  font-openSans  align-middle  mx-4`} onClick={handleUnderline}>Servicios</a>
                <a href="/" className={`three  font-openSans  align-middle  mx-4`} onClick={handleUnderline}>Contacto</a>
                <hr className={underLinePosition}/>
            </div>
            
        </>
    );
}; 

export default Nav;