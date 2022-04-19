import { createContext, useState} from "react";

const AddContext = createContext()

const AddCartProvider = ({children})=>{

    const[productsAdded, setProductsAdded] = useState([]);
    
    const handleAddProduct = (dataProductAdded) =>{

        if(!(productsAdded.length)){
            setProductsAdded([...productsAdded, dataProductAdded])
        }
        setProductsAdded([...productsAdded, dataProductAdded])
    }
    // const updateData = (data) =>{
    //     let newData = db.map(el=> el.id === data.id ? data:el)
    //     setDb(newData)
    // }
    
    
    const data = {handleAddProduct, productsAdded};
    
    return(
        <AddContext.Provider value = {data}>
            {children}
        </AddContext.Provider>
    )
}

export { AddCartProvider };
export default AddContext;