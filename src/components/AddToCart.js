import { useContext } from "react";
import AddContext from "../context/addCartContext";

const AddToCart = ({id,name, price, quantity}) =>{

    const {handleAddProduct} = useContext(AddContext)

    return (
        <div className='flex justify-center  items-center my-8'>
            <button onClick= {e =>{handleAddProduct({id, name, price, quantity})}} className='border  border-black  rounded-full  px-4 py-2 bg-black text-white tracking-widest'>Add to Cart</button>
        </div>
    );
};

export default AddToCart;