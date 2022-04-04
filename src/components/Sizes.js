const Sizes = ({handleSelect}) =>{
    return (
        <div className='flex  justify-center items-start mt-7 gap-10' >
                
            <div className='flex justify-center items-center  border  border-black  w-6  h-6  font-Mono  text-sm  text-center  lg:cursor-pointer btn  btn-background-slide' onClick={handleSelect}>
                S
            </div>
            <div className='flex justify-center items-center  border  border-black  w-6  h-6  font-Mono  text-sm  text-center  lg:cursor-pointer btn  btn-background-slide' onClick={handleSelect}>
                M
            </div>
            <div className='flex justify-center items-center  border  border-black  w-6  h-6  font-Mono  text-sm  text-center  lg:cursor-pointer btn  btn-background-slide' onClick={handleSelect} >
                L
            </div>
            <div className='flex justify-center items-center  border  border-black  w-6  h-6  font-Mono  text-sm  text-center  lg:cursor-pointer btn  btn-background-slide' onClick={handleSelect}>                 
                XL
            </div>
        </div>
    );
};

export default Sizes;