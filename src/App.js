import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import "./App.css"
import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {

  const [idToDetail, setIdToDetail] = useState(null) 

  const idDetail = (id) =>{
    setIdToDetail(id)
  }

  return (
    <div className='overflow-x-hidden'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path= '/home' element ={<ItemListContainer idDetail = {idDetail}/>}/>
          <Route path='/products/:productId' element={<ItemDetailContainer id = {idToDetail}/>}/>
        </Routes>
      </BrowserRouter>  
      
      
    </div>
  );
};

export default App;
