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
            return;
        }

        if(!(productsAdded.length) || dataProductAdded.singleSize){
            setProductsAdded(dataProductAdded)
        }
        const exist = productsAdded.find(e => e.id === dataProductAdded.id)
        if(exist){
            setProductsAdded(productsAdded.map(e => e.id === dataProductAdded.id ? {...exist, quantity: exist.quantity += dataProductAdded.quantity}: e))
        }else{
            setProductsAdded([...productsAdded, dataProductAdded])
        }
    }
    
    const removeItem = (id) =>{
        const newSetArray = productsAdded.filter(e => e.id !== id)
        setProductsAdded(newSetArray)
    }
    
    const data = {handleAddProduct, productsAdded, removeItem};
    console.log(productsAdded)
    
    return(
        <AddContext.Provider value = {data}>
            {children}
        </AddContext.Provider>
    )
}

export { AddCartProvider };
export default AddContext;