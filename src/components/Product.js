import AddToCart from './AddToCart.js';
import ProductPicture from './ProductPicture.js';
import ProductQuantity from './ProductQuantity';
import Sizes from './Sizes';
import GoToCart from './GoToCart.js';
import handleSelect from '../helpers/handleSelect.js';
import PropTypes from 'prop-types';
import {useState, useContext} from 'react';
import AddContext from "../context/addCartContext";

const Product = ({picture, name, price, sizes, stock, id, discount, singleSize}) =>{

    const [currentStock, setCurrentStock] = useState(stock);
    const [quantityRetrieved, setQuantityRetrieved] = useState(null);
    const [sizeRetrieved, setSizeRetrieved] = useState (null);
    const [priceRetrieved, setPriceRetrieved] = useState(null);
    const [pictureRetrieved, setPictureRetrieved] = useState(null)
    const {productsAdded} = useContext(AddContext);


    const updateStock = (currentStock) =>{
        setCurrentStock(currentStock);
    };
    
    const quantityRetriever = (quantity) =>{
        setQuantityRetrieved(quantity)
    }

    const sizeRetriever = (size) =>{
        setSizeRetrieved(size)
    }

    const priceRetriever = (price) =>{
        setPriceRetrieved(price)
    }

    const pictureRetriever = (picture) =>{
        setPictureRetrieved(picture)
    }

    let isProduct = productsAdded.filter(item => item.id === id )
 

    return(
        <div className='grid grid-cols-1 mt-12 '>
            <ProductPicture picture={picture} name = {name} price = {price} id = {id} discount= {discount} priceRetriever = {priceRetriever} pictureRetriever = {pictureRetriever}/>
            <Sizes handleSelect={handleSelect} sizes= {sizes} sizeRetriever = {sizeRetriever}/>
            <ProductQuantity initialStock = {currentStock} updateStock = {updateStock} quantityRetriever = {quantityRetriever} />
            <div className={isProduct.length > 0 ? "flex justify-around items-center ": ''}>
                <AddToCart key ={id} id = {id} singleSize ={singleSize} name = {name} price = {priceRetrieved} quantity = {quantityRetrieved} size={sizeRetrieved} picture = {pictureRetrieved}/>
                {isProduct.length > 0 ? <GoToCart/>:false}
            </div>
        </div>
    );
};

export default Product;

Product.propTypes= {
    picture: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    sizes: PropTypes.array,
    discount: PropTypes.number
};