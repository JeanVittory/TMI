
import AddToCart from './AddToCart.js';
import ProductPicture from './ProductPicture.js';
import ProductQuantity from './ProductQuantity';
import Sizes from './Sizes';

const Product = () =>{
    return(
        <div className='grid grid-cols-1 mt-12 '>
            <ProductPicture/>
            <Sizes/>
            <ProductQuantity/>
            <AddToCart/>
        </div>
    )
}

export default Product;