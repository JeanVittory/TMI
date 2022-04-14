import Product from './Product';
import { useParams, useNavigate } from 'react-router-dom';
import { SpinnerCircularSplit } from 'spinners-react';
import fetchData from '../services/fetchData'
import {useState, useEffect} from 'react';
import fetchDataByCategory from '../services/fetchDataByCategory';
import SelectCategories from './SelectCategories';
import fetchCategories from '../services/fetchCategoriesAvailable';

const ItemListContainer = () =>{
    const [products, setProducts]= useState([]);
    const [categories, setCategories] = useState([]);
    const {categoryName} = useParams();
    let navigate = useNavigate();

    useEffect(()=>{
        setTimeout(() => {
            ( async () => {
                const urlFetch = '/productsCategoriesAvailables.json';
                const dataFetched = await fetchCategories(urlFetch);
                setCategories(dataFetched);
            })();
        }, 2000);

        return (()=>{
            setCategories([]);
        });
    },[]);
    
    useEffect(()=>{
        setTimeout(() => {
            (async () => {
                let products = [];
                const urlFetch = '/productsDb.json';
                if(!categoryName){
                    products = await fetchData(urlFetch)
                }else{
                    products = await fetchDataByCategory(categoryName, urlFetch);
                }
                setProducts(products);
            })();   
        }, 2000);

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
                            {products.map( e => <Product key={e.id} id={e.id} stock={e.stock} picture= {e.image} name = {e.name} price = {e.price} sizes = {e.sizes || null} discount={e.discount || null}/> )}
                        </div>
                    </>
                )};
        </>
    );
};

export default ItemListContainer;