import add from '../assets/svgs/add.svg'
import less from '../assets/svgs/less.svg'
import { useContext, useEffect } from "react";
import AddContext  from "../context/addCartContext";
import { toast, ToastContainer } from 'react-toastify';

const Cart = ({id, name, picture, price, initialQuantity, size}) =>{

    const {removeItem, handlerQuantityLess, handlerQuantityAdd, productsAdded} = useContext(AddContext);

    const product = productsAdded.find(prod => prod.id === id)
    
    useEffect(() =>{
        if(initialQuantity >= product.stock){
            toast("you've exceeded the quantity in stock", {
                bodyClassName: 'font-Mono text-sm'
            }); 
        }
    }, [initialQuantity]) //eslint-disable-line

    return (     
        <>
            <div className="flex  my-4 md:w-full">
                <ToastContainer autoClose={3000} limit = {1}/>
                <img src={picture} alt="porduct added" className="w-2/5 md:w-3/5 lg:w-2/5 mx-auto p-2"/>
                <div className="self-center  ml-5  p-4 ">
                    <p className="font-Mono text-sm">{name}</p>
                    <p className="font-Mono  text-sm">Size: {size}</p>
                    <button className="bg-red-500  text-white  p-2  text-sm  mt-2  hidden md:block" onClick={()=> removeItem(id)}>Remove</button>
                </div>
            </div>
            <div className="flex justify-evenly md:justify-end my-8 md:w-full">
                <div className="flex  justify-between   border  border-black  font-Mono  w-3/12  md:w-1/2  p-2   self-center">
                    <div className='flex  justify-center  items-center  border  border-black  rounded-full  w-7  h-7' onClick={()=>handlerQuantityLess(id)}>
                        <img src={less} alt="Less" className='lg:cursor-pointer'/>
                    </div>
                    <p className='text-center'>{initialQuantity}</p>
                    <div className='border  border-black  rounded-full  w-7  h-7' onClick={()=>handlerQuantityAdd(id)}>
                        <img src={add} alt='Add' className='lg:cursor-pointer'/>
                    </div>
                </div>
                <button className="bg-red-500  text-white  p-2  text-sm   md:hidden" onClick={()=> removeItem(id)}>Remove</button>
                <p className="justify-self-end  font-mono  tracking-widest  text-sm  self-center md:col-start-3 md:col-end-4  md:hidden">${(price*initialQuantity).toFixed(2)}</p>
            </div>
            <p className="justify-self-end  font-mono  tracking-widest  text-sm  self-center  hidden  md:block  ">${(price*initialQuantity).toFixed(2)}</p>  
           
        </>    
    )
};

export default Cart;