import { useContext } from "react";
import AddContext from "../context/addCartContext";

const AddToCart = ({id,name, price, quantity, size}) =>{

    const {handleAddProduct} = useContext(AddContext);

    

    return (
        <div className='flex justify-center  items-center my-8'>
            <button onClick= {() =>{handleAddProduct({id, name, price, quantity, size})}} className='border  border-black  rounded-full  px-4 py-2 bg-black text-white tracking-widest'>Add to Cart</button>
        </div>
    );
};

export default AddToCart;