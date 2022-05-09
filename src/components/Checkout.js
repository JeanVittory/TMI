import { writeBatch, getDocs, query, where, collection, documentId, addDoc } from "firebase/firestore";
import { firestoreDb } from "../services/firebase";
import { useContext, useEffect, useState } from "react";
import AddContext  from "../context/addCartContext";
import Input from "./Input";
import { Link } from "react-router-dom";

const Checkout = () =>{

  const {productsAdded, dataUserRetriever, idRetriever, setProductsAdded} = useContext(AddContext);
  const [total, setTotal ] = useState([]);
  const [dataUser, setDataUser] = useState({
    email : '',
    confirmEmail: '',
    name : '',
    lastName : '',
    address: '',
    city: '',
    phone: ''
  });
  const [confirmOrder, setConfirmOrder] = useState(false)

  const createOrder = () =>{
    const objOrder = {
      itemsBuyed: productsAdded,
      buyerData: {
        name: dataUser.name,
        surname: dataUser.lastName,
        phone: dataUser.phone,
        email: dataUser.email,
        address: dataUser.address,
        city: dataUser.city,
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
      idRetriever(id);
      dataUserRetriever(dataUser);
      setProductsAdded([]);
    }).catch((error) =>{
      console.log(error)
    })
  };

  const inputs = [
    {
      id: 1,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'It should be a valid email address!',
      required: 1,
      label: 'please give us your email to contact you immediately and give you the shipping details.',
    },

    {
      id: 2,
      name: 'confirmEmail',
      type: 'email',
      placeholder: 'Confirm Email',
      errorMessage: "The emails don't match!",
      required: 1,
      pattern: dataUser.email,
      divition: 1
    },

    {
      id: 3,
      name: 'name',
      type: 'text',
      placeholder: 'Name',
      errorMessage: "Name should be at least 3 characters",
      pattern: "^([a-zA-Z]).{3,}$",
      required: 1
    },
    
    {
      id: 4,
      name: 'lastName',
      type: 'text',
      placeholder: 'Last Name',
      errorMessage: "Last Name should be at least 3 characters",
      pattern: "^([a-zA-Z]).{3,}$",
      required: 1
    },
    
    {
      id: 5,
      name: 'address',
      type: 'text',
      placeholder: 'Address',
      errorMessage: 'Please we need an address to send your products',
      required: 1
    },

    {
      id: 6,
      name: 'city',
      type: 'text',
      placeholder: 'City',
      errorMessage: "Enter your city of residence",
      required: 1
    },

    {
      id: 7,
      name: 'phone',
      type: 'text',
      placeholder: 'Phone',
      errorMessage: 'Please enter a valid phone',
      pattern: "^[0-9].{3,}$",
      required: 1
    }
  ];
   
  const handleSubmit = (e) =>{
    e.preventDefault();
  };
    
  const onChange = (e) => {
    setDataUser({...dataUser, [e.target.name]: e.target.value});
  };
    
  useEffect(()=>{
    document.title = 'Red Sun Cult - Checkout';
  },[]);
    
  useEffect(()=>{
    const subTotal = () =>{
      const prices = productsAdded.map(e => e.price && e.price * e.quantity);
      const result = prices.reduce((prev, current) => prev + current, 0);
      return setTotal(result);
    }
    subTotal();
  }, [productsAdded]);

  useEffect(()=>{
      Object.values(dataUser).forEach(e =>{
        if(!e){
          setConfirmOrder(false)
        }else{
          setConfirmOrder(true);
        } 
      })
  },[dataUser])

  return(
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 ">
      <article className="flex  flex-col  justify-center md:col-start-3  md:col-end-4">
        {productsAdded.map(e => (
          <section key={e.id} className="flex  flex-row  justify-around  items-center  mt-8  gap-4">
            <img src={e.picture} alt="imagen producto" className="w-16 border border-gray p-2 rounded-md"/>
            <div>
              <p className="font-Sans text-xs">{e.name}</p>
              <p className="font-Sans text-xs">Quantity: {e.quantity}</p>
            </div>
            <p className="font-Sans text-xs font-bold ml-8">${e.price.toFixed(2)}</p>
          </section>
        ))}
        <section className="flex  flex-row  justify-center  items-center gap-8  mt-8 mx-8 md:mx-0 border-y">
          <p className="font-Sans text-xs">Total:</p>
          <p className="font-Sans text-sm font-bold">{parseFloat(total).toFixed(2)}</p>
        </section>
      </article>
      <div className="md:row-start-1 md:col-span-2 mt-8">
        <form className="form" onSubmit={handleSubmit}>
          <h2 className="h2-information">Contact Information:</h2>
            {inputs.map (element => { 
              return <Input key= {element.id} {...element} value= {dataUser[element.name]} onChange = {onChange}/> 
            })}
            <Link to='/orderConfirmed' onClick={createOrder} className={`buttonForm ${confirmOrder || 'pointer-events-none'}`}>Confirm Order</Link>
        </form>
      </div>
    </div>   
  )
};

export default Checkout;