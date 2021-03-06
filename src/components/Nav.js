import {useState, useEffect} from 'react';
import BurguerMenu from './BurguerMenu';
import CartWidget from './CartWidget';
import NavMenu from './NavMenu';
import NavMenuSmall from './NavMenuSmall';

const Nav = () =>{

    const [viewportDimensions, setViewportDimensions] = useState(window.innerWidth);
    const [viewPanel, setViewPanel] = useState(false);
    
    useEffect(() =>{
        const handleResize = () =>{
            setViewportDimensions(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
    
        return ()=>{
            window.removeEventListener('resize', handleResize);
        };       
    },[]);

    const handleOpenPanel = () =>{
        setViewPanel(true);
    };

    const handleClosePanel=() =>{
        setViewPanel(false);
    };
    
    return(
        <>
            <div className= 'flex  justify-end  mr-16  md:justify-center  items-center'>
                <CartWidget />
                {[viewportDimensions] <= 730 ? <BurguerMenu handleOpenPanel = {handleOpenPanel}/> : <NavMenu/>}
                {[viewportDimensions] <=730? <NavMenuSmall viewPanel = {viewPanel} handleClosePanel = {handleClosePanel}/>: false}
            </div>
        </>
    );
}; 

export default Nav;