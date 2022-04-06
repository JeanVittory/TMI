import Product from "./Product";
import {useState, useEffect} from 'react';

const ItemListContainer = () =>{
    const [products, setProducts]= useState([]);

    useEffect(() =>{
        fetchData();
    },[]);
    
    const fetchData = async () =>{
        const res = await fetch("./productsDb.json");
        const data = await res.json();
        setProducts(data)
    };
    console.log(products)

    return(
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map( e => <Product key={e.id} picture= {e.image} name = {e.name} price = {e.price} sizes = {e.size ? e.size:false}/> )}
        </div>
    );
};

export default ItemListContainer;