import PropTypes from 'prop-types'

const Sizes = ({handleSelect, sizes}) =>{

    return (
        
        <div>
            <div className='flex  justify-center items-start mt-7 gap-10'>
            {sizes? sizes.map((e, index) => <div key={index} className='flex justify-center items-center  border  border-black  px-2  py-1  font-Mono  text-sm  text-center  lg:cursor-pointer btn  btn-background-slide' onClick={handleSelect}>{e}</div>):(<div className='flex  justify-center items-start'><div className="flex justify-center items-center  border  border-black font-Mono  text-sm  text-center  px-2  py-1">Single Size</div></div>)}
            </div>
        </div>

    );
};

export default Sizes;

Sizes.propTypes = {
    handleSelect: PropTypes.func,
    sizes: PropTypes.array
}