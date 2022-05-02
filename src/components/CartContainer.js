import { useContext, useState, useEffect} from "react";
import AddContext  from "../context/addCartContext";
import Cart from "./Cart";
import { useNavigate } from 'react-router-dom';
import { writeBatch, getDocs, query, where, collection, documentId, addDoc } from "firebase/firestore";
import { firestoreDb } from "../services/firebase";

const CartContainer = () =>{

    const {productsAdded} = useContext(AddContext);
    const [total, setTotal ] = useState([]);

    let navigate = useNavigate();
    
    useEffect(()=>{
        const subTotal = () =>{
            const prices = productsAdded.map(e => e.price && e.price * e.quantity);
            const result = prices.reduce((prev, current) => prev + current, 0);
            return setTotal(result);
        }

        subTotal();
    }, [productsAdded]);

    const handleNavigate = () =>{
        navigate('/');
    };

    const createOrder = () =>{
        const objOrder = {
            itemsBuyed: productsAdded,
            buyerData: {
                name: 'Jean Carlo',
                surname: 'Jiménez Laguna',
                phone: 3456789,
                email: 'juanito43@yahoo.com',
                address: 'Carrera 45 numero 56-12 barrio Las Palmas',
                city: 'Cali',
            },
            totalBuyed: total,
            date: new Date() 
        };

        const batch = writeBatch(firestoreDb);
        const collectionRef = collection(firestoreDb, 'products');
        const ids = productsAdded.map(product => product.id);
        const unvalidStock = [] 

        getDocs(query(collectionRef, where(documentId(), 'in', ids))).then(response =>{
            response.docs.forEach(doc =>{
                const documentData = doc.data()
                const productQuantitySelected = productsAdded.find(product => product.id === doc.id)?.quantity;

                if(documentData.stock >= productQuantitySelected){
                    batch.update(doc.ref, {stock: documentData.stock - productQuantitySelected});
                }else{
                    unvalidStock.push({id: doc.id, ...documentData})
                }
            })
        }).then(() =>{
            if(!unvalidStock.length){
                const collectionRef = collection(firestoreDb, 'orders');
                return addDoc(collectionRef, objOrder);
            }else{
                return Promise.reject({nameError: 'you have exceeded the quantity in stock', productsOnError: unvalidStock});
            }
        }).then(({id})=>{
            batch.commit();
            console.log(`Your order id is : ${id}`)
        }).catch((error) =>{
            console.log(error)
        })
    }

    return(
        <>
           {!productsAdded.length?(
            <div className="container mx-auto mt-8 mb-36">
                <p className="font-Mono text-base tracking-widest ">You have no items in your shopping cart</p>
                <button className='border border-black p-2 mt-4 bg-black text-white font-Mono tracking-widest' onClick={handleNavigate}>Take me back at store</button>
            </div>
           ) :(
                        <div className="container mx-auto ">

                        <h2 className="font-Sans  font-semibold  tracking-wider  text-2xl my-10 ml-8">CART</h2>
                        <button className='border border-black p-2 mt-4 bg-black text-white font-Mono text-sm tracking-widest' onClick={handleNavigate}>Keep buying</button>
                        <section className="grid md:grid-cols-3">
                            
                            <p className="md:col-span-2  justify-self-end  my-4  font-mono  tracking-widest  text-sm hidden  md:block">QUANTITY</p>
                            <p className="md:col-span-1  justify-self-end  my-4  font-mono  tracking-widest  text-sm hidden  md:block">TOTAL</p>
                            <hr className="divide-y  divide-black  border-black col-span-3  hidden md:block" />
                            {productsAdded.map( e => <Cart key= {e.id} id= {e.id} name = {e.name} picture ={e.picture} price={e.price} initialQuantity = {e.quantity} size = {e.size} stock = {e.stock}/> )}
                            <hr className="divide-y  divide-black  border-black md:col-span-3" />
                            <div className="grid  grid-cols-2  md:col-span-3  md:justify-self-end  md:grid  md:grid-cols-2  my-4  gap-x-4 md:gap-4">        
                                <p className="font-Sans justify-self-end font-bold my-4">SUBTOTAL</p>
                                <p className="font-Mono my-4">${parseFloat(total).toFixed(2)}</p>
                                <button className="col-span-2  justify-self-center bg-black text-white p-2  w-1/2" onClick={createOrder}>Check Out</button>
                            </div>
                        </section>
                    </div>
           )} 
        </>

    )
};

export default CartContainer;