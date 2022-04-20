import cartWidget from '../assets/svgs/cartWidget.svg';
import {useContext} from 'react';
import AddContext from '../context/addCartContext';

const CartWidget = () =>{

    const {productsAdded} = useContext(AddContext)
    return(
        <>
            <div className = 'flex  items-start'>
                <div className= 'bg-red-500  w-4  h-4  rounded-full  relative  -top-2  -right-9'><span className='flex  justify-center  items-center w-4  h-4'>{productsAdded.length}</span></div>
                <img src={cartWidget} alt='Carrito' className= 'w-7'/>
            </div>
        </>
    );
};

export default CartWidget;