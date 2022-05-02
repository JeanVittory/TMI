import { useContext } from "react";
import AddContext from "../context/addCartContext";

const AddToCart = ({id, name, price, quantity, size, picture, singleSize, stock}) =>{

    const {handleAddProduct} = useContext(AddContext);

    const disabled = stock === 0 ? true : false;

    return (
        <div className='flex justify-center  items-center my-8'>
            <button disabled = {disabled} onClick= {() =>{handleAddProduct({id, name, price, quantity, size, picture, singleSize, stock})}} className='border  border-black  rounded-full  px-4 py-2 bg-black text-white tracking-widest'>{stock ? 'Add to Cart': 'Sold Out'}</button>
        </div>
    );
};

export default AddToCart;