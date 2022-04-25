import { createContext, useState} from "react";
import { toast } from 'react-toastify';

const AddContext = createContext()

const AddCartProvider = ({children})=>{

    const[productsAdded, setProductsAdded] = useState([]);
    
    const handleAddProduct = (dataProductAdded) =>{

        if(!(dataProductAdded.size) && !(dataProductAdded.singleSize)){
            toast("Please specified the size of your product", {
                bodyClassName: 'font-Mono text-sm'
            });
        }

        if(!(productsAdded.length) || dataProductAdded.singleSize){
            setProductsAdded(dataProductAdded)
        }

        const exist = productsAdded.find(e => e.id === dataProductAdded.id)
        if(exist){
            setProductsAdded(productsAdded.map(e => e.id === dataProductAdded.id ? {...exist, quantity: exist.quantity += dataProductAdded.quantity}: e))
            toast("Your product is waiting in the cart :) thanks!", {
                bodyClassName: 'font-Mono text-sm'
            });
        }else{
            setProductsAdded([...productsAdded, dataProductAdded])
            toast("Your product is waiting in the cart :) thanks!", {
                bodyClassName: 'font-Mono text-sm'
            });
        }
    }
    
    const removeItem = (id) =>{
        const newSetArray = productsAdded.filter(e => e.id !== id)
        setProductsAdded(newSetArray)
    }


    const handlerQuantityLess = (id) =>{
        const exist = productsAdded.find(e => e.id === id)
        if(exist && exist.quantity > 1){
            setProductsAdded(productsAdded.map(e => e.id === id ? {...exist, quantity: exist.quantity -= 1}: e))
        }
    }

    const handlerQuantityAdd = (id) =>{
        const exist = productsAdded.find(e => e.id === id)
        if(exist && exist.quantity < exist.stock){
            setProductsAdded(productsAdded.map(e => e.id === id ? {...exist, quantity: exist.quantity += 1}: e))
        }
    }
    
    const data = {handleAddProduct, productsAdded, removeItem, handlerQuantityLess, handlerQuantityAdd};
    
    return(
        <AddContext.Provider value = {data}>
            {children}
        </AddContext.Provider>
    )
}

export { AddCartProvider };
export default AddContext;