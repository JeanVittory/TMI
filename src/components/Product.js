
import AddToCart from './AddToCart.js';
import ProductPicture from './ProductPicture.js';
import ProductQuantity from './ProductQuantity';
import Sizes from './Sizes';
import handleSelect from '../helpers/handleSelect.js';
import PropTypes from 'prop-types';
import {useState} from 'react';

const Product = ({picture, name, price, sizes, stock, id, discount}) =>{

    const [currentStock, setCurrentStock] = useState(stock);

    const updateStock = (currentStock) =>{
        setCurrentStock(currentStock)
    }


    return(
        <div className='grid grid-cols-1 mt-12 '>
            <ProductPicture picture={picture} name = {name} price = {price} id = {id} discount= {discount}/>
            <Sizes handleSelect={handleSelect} sizes= {sizes}/>
            <ProductQuantity initialStock = {currentStock} updateStock = {updateStock}/>
            <AddToCart/>
        </div>
    )
}

export default Product;

Product.propTypes= {
    picture: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    sizes: PropTypes.array
}