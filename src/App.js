import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="container mx-auto">
      <NavBar/>
      <ItemListContainer greeting = 'Greetings coder'/>
    </div>
  );
};

export default App;
