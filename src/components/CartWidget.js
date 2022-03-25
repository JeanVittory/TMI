import cartWidget from '../assets/svgs/cartWidgetTMI.svg';
import {useState} from 'react';

const CartWidget = () =>{

    const [numberCartWidget, setNumberCartWidget] = useState(0)
    return(
        <>
            <div className = 'flex  justify-end  items-center'>
                <div className= 'bg-red-500  w-4  h-4  rounded-full  relative  -top-4  -right-10'><span className='flex  justify-center  items-center w-4  h-4'>{numberCartWidget}</span></div>
                <img src={cartWidget} alt="Carrito" className= 'w-7'/>
            </div>
        </>
    );
};

export default CartWidget;