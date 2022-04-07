import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({id}) =>{
    const {productId} = useParams();
    const [product, setProduct] = useState(null )

    useEffect(()=>{
        setTimeout(()=>{
            fetchDataFiltered(productId)
        }, 2000)
    },[])

    const fetchDataFiltered = async (productId) =>{
        const res = await fetch("/productsDb.json");
        const data = await res.json();
        const productFiltered = data.find(e => e.id === parseInt(productId))
        console.log(productFiltered)
    };
    return(
        <div>

        </div>
    )
}

export default ItemDetailContainer;