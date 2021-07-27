import './styles/main.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
let name = 'Fede'

  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer nombre={name}/>
    <ItemDetailContainer/>
    </div>
  );
}

export default App;
