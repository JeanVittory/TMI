import cartWidget from '../assets/svgs/cartWidget.svg';
import {useState} from 'react';

const CartWidget = () =>{

    const [numberCartWidget, setNumberCartWidget] = useState(0);
    return(
        <>
            <div className = 'flex  items-start'>
                <div className= 'bg-red-500  w-4  h-4  rounded-full  relative  -top-2  -right-9'><span className='flex  justify-center  items-center w-4  h-4'>{numberCartWidget}</span></div>
                <img src={cartWidget} alt='Carrito' className= 'w-7'/>
            </div>
        </>
    );
};

export default CartWidget;