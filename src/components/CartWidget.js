import cartWidget from '../assets/svgs/cartWidget.svg';
import {useContext, useEffect, useState} from 'react';
import AddContext from '../context/addCartContext';

const CartWidget = () =>{

    const {productsAdded} = useContext(AddContext)
    const [totalQuantity, setTotalQuantity] = useState(null)

    useEffect(() =>{
        const totalQuantity = () =>{
            const quantity = productsAdded.map(e => e.quantity);
            const result = quantity.reduce((prev, current) => prev + current, 0);
            setTotalQuantity(result)
        }
        totalQuantity()
    }, [productsAdded])

    return(
        <>
            {productsAdded.length > 0 && (
                <div className = 'flex  items-start'>
                    <div className= 'bg-red-500  w-5  h-5  rounded-full  relative  -top-2  -right-9'>
                        <span className='flex  justify-center  items-center w-5  h-5 '>{totalQuantity}</span>
                    </div>
                    <img src={cartWidget} alt='Carrito' className= 'w-7'/>
                </div>
            )}
        </>
    );
};

export default CartWidget;