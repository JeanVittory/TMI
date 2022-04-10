import discountImage from '../assets/svgs/discount_flag.svg'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


const ProductPicture = ({picture, name, price, id, discount}) =>{
    
    const [discountQuantity, setDiscountQuantity] = useState(null);
    const [priceWithDiscount, setPriceWithDiscount] = useState(null);
    const [discountStyle, setDiscountStyle] = useState("");
    
    useEffect(()=>{
        if(discount){
            setDiscountQuantity(discount);  
            setDiscountStyle("line-through");
            discountOperation();
        }

    },[])

    const discountOperation = () =>{
        let prevResult = (discount / 100) * price;
        let result = price - prevResult;
        setPriceWithDiscount(result);
    }
    
    return(
        <>
           
            <Link to={`/products/${id}`} className='flex justify-center items-center w-full md:h-80 md:w-80'><img src={picture} alt="Camisa Negra con Logo" className=' w-4/5 md:h-full md:w-auto'/></Link>
            
            <div className='flex  flex-col  justify-start  items-start  md:justify-start  md:items-start  md:pl-8  mx-20  md:mx-0'>
                <p className=' w-8/12  lg:w-full  font-Mono  text-sm  pt-3  text-left'>
                    {name}
                </p>
                {discountQuantity ?(
                    <div className='flex justify-between items-center w-5/6'>
                        <div className='flex'>                    
                            <p className={`w-8/12  lg:w-full  font-Mono  text-sm   ${discountStyle}`}>
                                ${price.toFixed(2) }
                            </p>
                            <p className='w-8/12  lg:w-full  font-Mono  text-sm pl-3'>
                                ${priceWithDiscount.toFixed(2)}
                            </p>
                        </div>
                        <div>
                            <div className='bg-red-500  w-7  h-6  rounded-full flex justify-center items center'>
                                <img src={discountImage} alt="discount" className='relative top-1  w-4 h-4 md:w-4 md:h-4 '/> 
                            </div>
                        </div>
                    </div>
                ):(
                    <p className={`w-8/12  lg:w-full  font-Mono  text-sm `}>
                    ${price.toFixed(2) }
                </p>
                )
                 }
            </div>
        </>
    );
};

export default ProductPicture;

ProductPicture.propTypes = {
    discount: PropTypes.number,
    picture: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number
}