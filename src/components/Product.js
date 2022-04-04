
import AddToCart from './AddToCart.js';
import ProductPicture from './ProductPicture.js';
import ProductQuantity from './ProductQuantity';
import Sizes from './Sizes';
import {useState} from 'react';

const Product = () =>{

    const [currentStock, setCurrentStock] = useState(10)

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
            <ProductPicture/>
            <Sizes handleSelect={handleSelect}/>
            <ProductQuantity initialStock = {currentStock} updateStock = {updateStock}/>
            <AddToCart/>
        </div>
    )
}

export default Product;