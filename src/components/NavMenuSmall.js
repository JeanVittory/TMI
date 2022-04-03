import {useState, useEffect} from 'react';
import rightArrow from '../assets/svgs/rightArrowPanelSmall.svg'
import facebook from '../assets/svgs/facebook.svg'
import instagram from '../assets/svgs/instagram.svg'
import bandcamp from '../assets/svgs/bandcamp.svg'

const NavMenuSmall = ({handleSelect, viewPanel, handleClosePanel}) =>{
    const [positionPanel, setPositionPanel] = useState("")
    useEffect(()=>{
        
        if(viewPanel){
            setPositionPanel('left-2/3')
        }else{
            setPositionPanel('left-full')
        }
    },[viewPanel])


    return (
        <div className={`transition-all  ease-in-out duration-1000  h-screen  w-2/6 bg-slate-100 slide  ${positionPanel}`}>
             <img src={rightArrow} alt="Close Button"  className='w-7 m-3' onClick={handleClosePanel}/>
            <div className= {`h-full flex  flex-col  justify-center  items-center`} >
                <a href="/" className="font-Mono  text-base  tracking-wide  text-black  p-3">HOME</a>
                <hr className='text-black w-28  border-1'/>
                <a href="/" className="font-Mono  text-base  tracking-wide  text-black  p-3">FAQS</a>
                <hr className='text-black w-28  border-1'/>
                <a href="/" className="font-Mono  text-base  tracking-wide  text-black  p-3">CONTACT</a>
                <hr className='text-black w-28  border-1'/>
                <div className='flex justify-center items-center mt-3'>
                    <a href='/'><img src={instagram} alt="instagram" className='w-5 m-3'/></a>
                    <a href='/'><img src={facebook} alt="facebook" className='w-5  m-3'/></a>
                    <a href='/'><img src={bandcamp} alt="bandcamp" className='w-5  m-3'/></a>
                </div>
            </div>
        </div>

    )
}

export default NavMenuSmall;