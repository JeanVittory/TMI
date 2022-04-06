import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import "./App.css"


function App() {
  return (
    <div className='overflow-x-hidden'>
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
};

export default App;
