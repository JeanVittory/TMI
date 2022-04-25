import add from '../assets/svgs/add.svg'
import less from '../assets/svgs/less.svg'
import { useContext} from "react";
import AddContext  from "../context/addCartContext";

const Cart = ({id, name, picture, price, quantity, size}) =>{

    const {removeItem} = useContext(AddContext);

    return (     
        <>
            <div className="flex  my-4 md:w-full">
                <img src={picture} alt="porduct added" className="w-2/5 md:w-3/5 lg:w-2/5 mx-auto p-2"/>
                <div className="self-center  ml-5  p-4 ">
                    <p className="font-Mono text-sm">{name}</p>
                    <p className="font-Mono  text-sm">Size: {size}</p>
                    <button className="bg-red-500  text-white  p-2  text-sm  mt-2  hidden md:block" onClick={()=> removeItem(id)}>Remove</button>
                </div>
            </div>
            <div className="flex justify-evenly md:justify-end my-8 md:w-full">
                <div className="flex  justify-between   border  border-black  font-Mono  w-3/12  md:w-1/2  p-2   self-center">
                    <div className='flex  justify-center  items-center  border  border-black  rounded-full  w-7  h-7'>
                        <img src={less} alt="Less" className='lg:cursor-pointer'/>
                    </div>
                    <p className='text-center'>{quantity}</p>
                    <div className='border  border-black  rounded-full  w-7  h-7'>
                        <img src={add} alt='Plus' className='lg:cursor-pointer'/>
                    </div>
                </div>
                <button className="bg-red-500  text-white  p-2  text-sm   md:hidden">Remove</button>
                <p className="justify-self-end  font-mono  tracking-widest  text-sm  self-center md:col-start-3 md:col-end-4  md:hidden">${(price*quantity).toFixed(2)}</p>
            </div>
            <p className="justify-self-end  font-mono  tracking-widest  text-sm  self-center  hidden  md:block  ">${(price*quantity).toFixed(2)}</p>  
           
        </>    
    )
};

export default Cart;