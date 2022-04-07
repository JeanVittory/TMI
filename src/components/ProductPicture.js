import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


const productPicture = ({picture, name, price, id, handleDetailId}) =>{

    return(
        <>
           
            <Link to={`/products/${id}`} className='flex justify-center items-center w-full md:h-80 md:w-80'><img src={picture} alt="Camisa Negra con Logo" className=' w-4/5 md:h-full md:w-auto ' onClick={handleDetailId}/></Link>
            
            <div className='flex flex-col  justify-center items-center'>
                <p className=' w-8/12  lg:w-full  font-Mono  text-sm  pt-3  text-left'>
                    {name}
                </p>
                <p className='w-8/12  lg:w-full  font-Mono  text-sm  text-left'>
                    ${price.toFixed(2) }
                </p>
            </div>
        </>
    );
};

export default productPicture;

productPicture.propTypes = {
    picture: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number
}