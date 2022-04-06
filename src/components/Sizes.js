import PropTypes from 'prop-types'

const Sizes = ({handleSelect, sizes}) =>{

    return (
        
        <div>
            {sizes?(<div className='flex  justify-center items-start mt-7 gap-10' >
                <div className='flex justify-center items-center  border  border-black  w-6  h-6  font-Mono  text-sm  text-center  lg:cursor-pointer btn  btn-background-slide' onClick={handleSelect}>
                    {sizes[0]}
                </div>
                <div className='flex justify-center items-center  border  border-black  w-6  h-6  font-Mono  text-sm  text-center  lg:cursor-pointer btn  btn-background-slide' onClick={handleSelect}>
                    {sizes[1]}
                </div>
                <div className='flex justify-center items-center  border  border-black  w-6  h-6  font-Mono  text-sm  text-center  lg:cursor-pointer btn  btn-background-slide' onClick={handleSelect} >
                    {sizes[2]}
                </div>
                <div className='flex justify-center items-center  border  border-black  w-6  h-6  font-Mono  text-sm  text-center  lg:cursor-pointer btn  btn-background-slide' onClick={handleSelect}>                 
                    {sizes[3]}
                </div>
            </div>):(
                <div className='flex  justify-center items-start mt-7 gap-10'>
                    <div className="flex justify-center items-center  border  border-black  w-1/2  h-full  font-Mono  text-sm  text-center">Single Size</div>
                </div>
            )}
           
        </div>

    );
};

export default Sizes;

Sizes.propTypes = {
    handleSelect: PropTypes.func,
    sizes: PropTypes.array
}