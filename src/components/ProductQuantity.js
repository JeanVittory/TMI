import add from '../assets/svgs/add.svg'
import less from '../assets/svgs/less.svg'
import useQuantity from '../hooks/useQuantity';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';

const ProductQuantity = ({initialStock, updateStock, quantityRetriever, stock}) =>{
    const [quantity, currentStock, handlerClickQuantityAdd, handlerQuantityLess] = useQuantity(initialStock, stock);

    useEffect(()=>{
        updateStock(currentStock);
        if(currentStock === 1 ){
            toast("You've reached the maximum number of products available!", {
                bodyClassName: 'font-Mono text-sm'
            });
        };
    }, [currentStock]);

    useEffect(() =>{
        quantityRetriever(quantity)
    }, [])

    return(
        <div className='flex justify-center item-center'>
            <ToastContainer autoClose={3000} limit = {1}/>
            <div className='flex justify-between item-center w-2/5  md:w-3/4  mt-8  p-2  border-y  border-black'>
                <div className=' border  border-black rounded-full' onClick={handlerQuantityLess}>
                    <img src={less} alt="Less" className={stock === 0 ? 'w-6  lg:cursor-default': 'w-6  lg:cursor-pointer'}/>
                </div>
                <p>{[quantity]}</p>
                <div className='border  border-black  rounded-full' onClick={handlerClickQuantityAdd}>
                    <img src={add} alt='Plus' className={stock === 0 ? 'w-6  lg:cursor-default': 'w-6  lg:cursor-pointer'}/>
                </div>
            </div>
        </div>
    );
};

export default ProductQuantity;

ProductQuantity.propTypes = {
    initialStock: PropTypes.number,
    updateStock: PropTypes.func
};