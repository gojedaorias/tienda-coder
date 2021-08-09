import "./styles/main.scss";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./contexts/CartContext";

function App() {

 

  return (
    <Router>
      <Switch>
        
      <div className="App">
        <NavBar  />
        <CartContextProvider>
        <Route path="/" component={ItemListContainer} exact />
        <Route path="/detail/:id" component={ItemDetailContainer} />
        <Route path="/category/:categodyId" component={ItemListContainer}/>
        <Route path="/cart" component={Cart}/>
        </CartContextProvider>
      </div>
      </Switch>
    </Router>
  );
}

export default App;
