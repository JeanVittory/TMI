import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SpinnerCircularSplit } from 'spinners-react';
import AddContext  from "../context/addCartContext";

const OrderConfirmed = () =>{

    const {dataUser, idPurchase} = useContext(AddContext);
    let navigate = useNavigate();
    const handleNavigate = () =>{
        navigate('/');
    };
    
    return (
        <>
            {dataUser && idPurchase ? (
                <main className="container mx-auto ">
                    <button className='border border-black p-2 mt-10 ml-8 md:ml-0 bg-black text-white font-Mono tracking-widest' onClick={handleNavigate}>Take me back at store</button>
                    
                    <section className='w-1/2 md:w-2/6 h-64 text-center py-1  mx-auto mt-10 divide-y divide-dashed divide-black border border-black border-dashed'>   
                        <p className="font-Sans font-bold py-2">id: <span className="font-Sans font-normal italic py-2"><mark>{idPurchase}</mark></span></p>
                        <p className="font-Sans  font-bold py-2">Name: <span className="font-Sans font-normal  py-2">{dataUser.name}</span></p>
                        <p className="font-Sans font-bold py-2">Last Name: <span className="font-Sans font-normal py-2">{dataUser.lastName}</span></p>
                        <p className="font-Sans font-bold py-2">Address: <span className="font-Sans font-normal py-2">{dataUser.address}</span></p>
                        <p className="font-Sans font-bold py-2">City: <span className="font-Sans font-normal py-2">{dataUser.city}</span></p>
                        <p className="font-Sans font-bold py-2">Phone: <span className="font-Sans font-normal py-2">{dataUser.phone}</span></p>
                    </section>
                    
                <aside className="flex justify-end mx-auto mt-10">
                        <p className="font-Mono text-sm ml-8 md:ml-0">
                            Please keep the id generated in this invoice to facilitate the tracking of your purchase.
                        </p>
                </aside>
                </main>
            ):(
                <div className='container mx-auto w-screen h-screen flex justify-center items-center'>
                    <SpinnerCircularSplit size={50} thickness={100} speed={139} color='rgba(172, 57, 57, 1)' secondaryColor='rgba(0, 0, 0, 0.43)' />
                </div>
            ) }
        </>
    )
}

export default OrderConfirmed