import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SpinnerCircularSplit } from 'spinners-react';
import { getDoc, doc } from 'firebase/firestore';
import { firestoreDb } from '../services/firebase';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () =>{
    const {productId} = useParams();
    const [product, setProduct] = useState(null);
   

    useEffect(()=>{

        getDoc(doc(firestoreDb, 'products', productId)).then(response =>{
            console.log(response)
            const product = {id: response.id, ...response.data()}
            setProduct(product)
        })
    },[]);

    return(
        <>
            {product ? <ItemDetail product = {product}/>:<div className='container mx-auto w-screen h-screen flex justify-center items-center'><SpinnerCircularSplit size={50} thickness={100} speed={139} color='rgba(172, 57, 57, 1)' secondaryColor='rgba(0, 0, 0, 0.43)' /></div>}
        </>
    );
};

export default ItemDetailContainer;