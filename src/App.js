import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
import Error404 from './components/Error404';


function App() {
  return (
    <div className='overflow-x-hidden'>
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
    </div>
  );
};

export default App;
