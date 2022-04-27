import Product from './Product';
import { useParams, useNavigate } from 'react-router-dom';
import { SpinnerCircularSplit } from 'spinners-react';
import { getDocs, collection, query, where } from 'firebase/firestore';
import {useState, useEffect} from 'react';
import SelectCategories from './SelectCategories';
import { firestoreDb } from '../services/firebase';

const ItemListContainer = () =>{
    const [products, setProducts]= useState([]);
    const [categories, setCategories] = useState([]);
    const {categoryName} = useParams();
    let navigate = useNavigate();

    useEffect(()=>{

        getDocs(collection(firestoreDb, 'productsCategoriesAvailables')).then(response =>{
            const categories = response.docs.map(doc =>{
                return {id: doc.id, ...doc.data()}
            })
            setCategories(categories)
        });

        return (()=>{
            setCategories([]);
        });
    },[]);
    
    useEffect(()=>{

        const collectionRef = categoryName 
            ? query(collection(firestoreDb, "products"), where('category', '==', categoryName))
            : collection(firestoreDb, 'products')

        getDocs(collectionRef).then(response =>{
            const products = response.docs.map(doc =>{
                return {id: doc.id, ...doc.data()}
            })
            setProducts(products)
        });
        
        return (()=>{
            setProducts([]);
        });

    },[categoryName]);

    const handleSelectCategories = (value) =>{
        navigate(value);
        setProducts([]);
    };

    return(
        <>        
            {!(products.length)?(
                <div className='container mx-auto w-screen h-screen flex justify-center items-center'>
                    <SpinnerCircularSplit size={50} thickness={100} speed={139} color='rgba(172, 57, 57, 1)' secondaryColor='rgba(0, 0, 0, 0.43)' />
                </div>
                ):
                ( 
                    <>
                        <SelectCategories categories= {categories} handleSelectCategories= {handleSelectCategories}/>
                        <div className='container mx-auto grid grid-cols-1  justify-center content-center md:grid-cols-2 lg:grid-cols-3  gap-4'>  
                            {products.map( e => <Product key={e.id} id={e.id} singleSize = {e.singleSize} stock={e.stock} picture= {e.image} name = {e.name} price = {e.price} sizes = {e.sizes || null} discount={e.discount || null}/> )}
                        </div>
                    </>
                )};
        </>
    );
};

export default ItemListContainer;