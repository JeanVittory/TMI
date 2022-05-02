import PropTypes from 'prop-types';
import { useState } from 'react';


const Sizes = ({sizes, sizeRetriever, stock}) =>{

    const [selectedSize, setSelectedSize] = useState("");

    const handleSelect = (e) =>{
        e.preventDefault();

        if(stock === 0) return
            
        for(let i of e.target.parentNode.children){
            if(i === e.target){
                i.classList.add('btn-background-slide-click');
               
            }else{
                i.classList.remove('btn-background-slide-click'); 
            };
        };
        handleSelectedSize(e);
    };

    const handleSelectedSize = (e) =>{
        setSelectedSize(e.target.getAttribute("data-size"));
    }

    sizeRetriever(selectedSize);

    return (
        
            <div className='flex  justify-center items-start mt-7 gap-10'>
            {sizes? sizes.map((e, index) => <div key={index} data-size={e} className={stock === 0 ? 'flex  border  border-black  px-2  py-1  font-Mono  text-sm  text-center  lg:cursor-default btn  btn-background-slide':'flex  border  border-black  px-2  py-1  font-Mono  text-sm  text-center  lg:cursor-pointer btn  btn-background-slide'}  onClick={handleSelect}>{e}</div>):(<div className='flex  justify-center items-start'><div className='flex justify-center items-center  border  border-black font-Mono  text-sm  text-center  px-2  py-1'>Single Size</div></div>)}
            </div>
        
    );
};

export default Sizes;

Sizes.propTypes = {
    sizes: PropTypes.array
};