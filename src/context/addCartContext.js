import { createContext, useState} from "react";

const AddContext = createContext()

const AddCartProvider = ({children})=>{

    const[productsAdded, setProductsAdded] = useState([]);
    
    const handleAddProduct = (dataProductAdded) =>{

        if(!(productsAdded.length)){
            setProductsAdded(dataProductAdded)
        }
        const exist = productsAdded.find(e => e.id === dataProductAdded.id)
        if(exist){
            setProductsAdded(productsAdded.map(e => e.id === dataProductAdded.id ? {...exist, quantity: exist.quantity += dataProductAdded.quantity}: e))
        }else{
            setProductsAdded([...productsAdded, dataProductAdded])
        }
    }    
    const data = {handleAddProduct, productsAdded};

    console.log(productsAdded)
    return(
        <AddContext.Provider value = {data}>
            {children}
        </AddContext.Provider>
    )
}

export { AddCartProvider };
export default AddContext;