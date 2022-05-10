import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
import CartContainer from './components/CartContainer';
import OrderConfirmed from './components/OrderConfirmed';
import Error404 from './components/Error404';
import Checkout from './components/Checkout';
import { AddCartProvider } from './context/addCartContext';


function App() {
  return (
    <div className='overflow-x-hidden'>
      <AddCartProvider>
        <Router>
          <NavBar/>
          <Routes>
            <Route path= '/' element ={<ItemListContainer/>}/>
            <Route path = '/category/:categoryName' element = {<ItemListContainer/>}/>
            <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
            <Route path = '/cart' element = {<CartContainer/>}/>
            <Route path = '/checkout' element = {<Checkout/>}/>
            <Route  path='/orderConfirmed' element = {<OrderConfirmed/>}/>  
            <Route path = '*' element = {<Error404/>}/>
          </Routes>
          <Footer/>
        </Router>
      </AddCartProvider>  
    </div>
  );
};

export default App;