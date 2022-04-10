import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SpinnerCircularSplit } from 'spinners-react';
import fetchDataFiltered from "../services/fetchDataFiltered";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () =>{
    const {productId} = useParams();
    const [product, setProduct] = useState(null)
   

    useEffect(()=>{
        setTimeout(async ()=>{
            const urlFetch = "/productsDb.json"
            const productFiltered = await fetchDataFiltered(productId, urlFetch)
            setProduct(productFiltered)
        }, 2000);

    },[])



    return(
        <>
            {product ? <ItemDetail product = {product}/>:<div className="container mx-auto w-screen h-screen flex justify-center items-center"><SpinnerCircularSplit size={50} thickness={100} speed={139} color="rgba(172, 57, 57, 1)" secondaryColor="rgba(0, 0, 0, 0.43)" /></div>}
            
        </>
    )
}

export default ItemDetailContainer;