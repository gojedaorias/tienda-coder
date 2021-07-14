import './styles/main.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
let name = 'Fede'

  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer nombre={name}/>
    </div>
  );
}

export default App;
