
import AddToCart from './AddToCart.js';
import ProductPicture from './ProductPicture.js';
import ProductQuantity from './ProductQuantity';
import Sizes from './Sizes';
import PropTypes from 'prop-types';
import {useState} from 'react';

const Product = ({picture, name, price, sizes, stock, id, idClickDetail}) =>{

    const [currentStock, setCurrentStock] = useState(stock);
    

    const handleSelect = (e) =>{
        e.preventDefault();
        
        for(let i of e.target.parentNode.children){
            if(i === e.target){
                i.classList.add('btn-background-slide-click');
                console.log(i)
               
            }else{
                i.classList.remove('btn-background-slide-click'); 
            };
        };
    };

    const updateStock = (currentStock) =>{
        setCurrentStock(currentStock)
    }

    const handleDetailId = () =>{
        idClickDetail(id)
    }

    return(
        <div className='grid grid-cols-1 mt-12 '>
            <ProductPicture picture={picture} name = {name} price = {price} id = {id} handleDetailId= {handleDetailId}/>
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