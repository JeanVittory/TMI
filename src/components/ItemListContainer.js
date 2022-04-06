import Product from "./Product";
import { SpinnerCircularSplit } from 'spinners-react';
import {useState, useEffect} from 'react';

const ItemListContainer = () =>{
    const [products, setProducts]= useState([]);

    useEffect(() =>{
        setTimeout(() => {
            fetchData();
        }, 2000);
    },[]);
    
    const fetchData = async () =>{
        const res = await fetch("./productsDb.json");
        const data = await res.json();
        setProducts(data)
    };
    console.log(products)

    
    return(
        <div className="container mx-auto grid grid-cols-1  justify-center content-center md:grid-cols-2 lg:grid-cols-3  gap-4">
            {!(products.length)?<div className="container mx-auto w-screen h-screen flex justify-center items-center"><SpinnerCircularSplit size={50} thickness={100} speed={139} color="rgba(172, 57, 57, 1)" secondaryColor="rgba(0, 0, 0, 0.43)" /></div>: products.map( e => <Product key={e.id} picture= {e.image} name = {e.name} price = {e.price} sizes = {e.sizes? e.sizes:false}/> )}
        </div>
    );
};

export default ItemListContainer;