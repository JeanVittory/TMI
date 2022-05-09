import { Link } from "react-router-dom";

const GoToCart = () =>{

    return (
        <div className='flex justify-center  items-center my-8'>
            <Link to= '/cart' className='border  border-black  rounded-full  px-4 py-2 bg-black text-white tracking-widest'>Go to Cart</Link>
        </div>
    );
};

export default GoToCart;