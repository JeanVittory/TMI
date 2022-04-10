import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import "./App.css"
import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';


function App() {


  return (
    <div className='overflow-x-hidden'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path= '/home' element ={<ItemListContainer/>}/>
          <Route path='/products/:productId' element={<ItemDetailContainer/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>  
      
      
    </div>
  );
};

export default App;
