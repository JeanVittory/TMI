import Sizes from './Sizes';
import handleSelect from '../helpers/handleSelect';
import ProductQuantity from './ProductQuantity';
import AddToCart from './AddToCart';
import GoToCart from './GoToCart';
import imageDiscount from '../assets/redsuncult_assets/discountImageDetail.png';
import { useState, useEffect, useContext } from 'react';
import AddContext from "../context/addCartContext";
import PropTypes from 'prop-types';

const ItemDetail = ({product}) => {

    const [currentStock, setCurrentStock] = useState(product.stock);
    const [discountQuantity, setDiscountQuantity] = useState(null);
    const [priceWithDiscount, setPriceWithDiscount] = useState(null);
    const [discountStyle, setDiscountStyle] = useState('');
    const [quantityRetrieved, setQuantityRetrieved] = useState(null);
    const [sizeRetrieved, setSizeRetrieved] = useState (null);
    const {productsAdded} = useContext(AddContext)

    let isProduct = productsAdded.filter(item => item.id === product.id )

    useEffect(()=>{
        if(product.discount){
            setDiscountQuantity(product.discount);  
            setDiscountStyle('line-through');
            discountOperation();
        };
        
    },[]);
    
    const updateStock = (currentStock) =>{
        setCurrentStock(currentStock);
    };

    const discountOperation = () =>{
        let prevResult = (product.discount / 100) * product.price;
        let result = product.price - prevResult;
        setPriceWithDiscount(result);
    };

    const quantityRetriever = (quantity) =>{
        setQuantityRetrieved(quantity)
    }

    const sizeRetriever = (size) =>{
        setSizeRetrieved(size)
    }

    return (
        <>        
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2  mt-12 gap-24'>
                <img src={product.image} alt={product.name} className='w-11/12 md:w-11/12 mt-12 mx-auto'/>
                <div className="px-6">
                    <h2 className='font-Sans  font-bold  text-3xl  tracking-wide  leading-normal'>{product.name.toUpperCase()}</h2>
                    <p className='font-Mono text-xl  mt-4  tracking-widest'>${product.price.toFixed(2)}</p>
                    <p className='font-Mono text-xs tracking-wide'>Shipping calculated at checkout</p>
                    <hr className='h-0.5 my-9 bg-black'/>

                    {discountQuantity ?(
                        <div className='flex items-center mb-7'>
                            <img src={imageDiscount} alt="Discount" className='w-12 h-12'/>
                            <div className="ml-3">
                                <p className='font-Mono text-xs tracking-widest'>Your Price</p>
                                <div className='flex font-Mono text-sm tracking-widest'>
                                    <p className= {discountStyle}>${product.price.toFixed(2)}</p>
                                    <p className='mx-2 text-green-600'>${priceWithDiscount.toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                    ): false}

                    <p className='font-Sans text-xs  tracking-widest'>COLOR: <span className='align-top  font-Mono text-[9px]'>{product.color.color}</span></p>
                    <div className='w-6  h-6 border-2 border-black  mt-2  flex justify-center items-center'><div className={'bg-black  w-4  h-4'}></div></div>
                    <div className='mt-10'>
                        <Sizes sizes={product.sizes} handleSelect={handleSelect} sizeRetriever = {sizeRetriever}/>
                    </div>
                    <div className='mt-5'>
                        <ProductQuantity initialStock={currentStock} updateStock={updateStock} quantityRetriever = {quantityRetriever}/>
                    </div>
                    <div className= {`mt-14 ${isProduct.length > 0 ? "flex justify-around items-center ": ''}`} >
                        <AddToCart key ={product.id} id = {product.id} name = {product.name} price = {product.price} quantity = {quantityRetrieved} size = {sizeRetrieved}/>
                        {isProduct.length > 0 ? <GoToCart/> : false}
                    </div>
                </div>
            </div>
            <div className='mt-10 px-6'>
                <p className='font-Mono  text-sm  tracking-widest'>PLEASE NOTE THAT THERE IS A 5-7 DAY FULFILLMENT TIME</p>
                <ul className='mt-4  px-6  font-Mono  text-xs  list-disc  tracking-wide  leading-loose'>
                    <li>Orders of this item are <u>expected to ship 5-7 business days from when the order is placed</u>, regardless of the shipping method chosen.</li>
                    <li>You will receive tracking information as soon as your order ships from our warehouse.</li>
                </ul>
            </div>
        </>

    );
};

export default ItemDetail;

ItemDetail.propTypes={
    products: PropTypes.array
};