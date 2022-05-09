import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AddContext  from "../context/addCartContext";

const OrderConfirmed = () =>{

    const {dataUser, idPurchase} = useContext(AddContext);
    let navigate = useNavigate();
    const handleNavigate = () =>{
        navigate('/');
    };
    
    return (
        <main className="container mx-auto ">
            <button className='border border-black p-2 mt-10 bg-black text-white font-Mono tracking-widest' onClick={handleNavigate}>Take me back at store</button>
            
            <section className='w-2/5 grid grid-cols-2 justify-items-center py-8 mx-auto'>   
                <p className="font-Sans py-2">id: </p><span className="font-Sans py-2">{idPurchase}</span>
                <p className="font-Sans py-2">Name:</p><span className="font-Sans py-2">{dataUser.name}</span>
                <p className="font-Sans py-2">Last Name: </p><span className="font-Sans py-2">{dataUser.lastName}</span>
                <p className="font-Sans py-2">Address: </p><span className="font-Sans py-2">{dataUser.address}</span>
                <p className="font-Sans py-2">City: </p><span className="font-Sans py-2">{dataUser.city}</span>
                <p className="font-Sans py-2">Phone: </p><span className="font-Sans py-2">{dataUser.phone}</span>
            </section>
            
           <aside className="flex justify-end mx-auto">
                <p className="font-Mono text-sm">
                    Please keep the id generated in this invoice to facilitate the tracking of your purchase.
                </p>
           </aside>
        </main>
    )
}

export default OrderConfirmed