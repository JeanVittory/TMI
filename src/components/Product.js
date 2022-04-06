
import AddToCart from './AddToCart.js';
import ProductPicture from './ProductPicture.js';
import ProductQuantity from './ProductQuantity';
import Sizes from './Sizes';
import {useState} from 'react';

const Product = ({picture, name, price, sizes}) =>{

    const [currentStock, setCurrentStock] = useState(10);
    

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

    return(
        <div className='grid grid-cols-1 mt-12 '>
            <ProductPicture picture={picture} name = {name} price = {price}/>
            <Sizes handleSelect={handleSelect} sizes= {sizes}/>
            <ProductQuantity initialStock = {currentStock} updateStock = {updateStock}/>
            <AddToCart/>
        </div>
    )
}

export default Product;