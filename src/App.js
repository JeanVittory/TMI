import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
import Error404 from './components/Error404';
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
            <Route path = '*' element = {<Error404/>}/>
          </Routes>
          <Footer/>
        </Router>
      </AddCartProvider>  
    </div>
  );
};

export default App;
