import "./styles/main.scss";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./contexts/CartContext";

const App=()=> {


  return (
        
      <div className="App">
        
        
    <Router>
  
      <Switch>
      <CartContextProvider>
      <NavBar  />
        <Route path="/" component={ItemListContainer} exact />
        <Route path="/detail/:id" component={ItemDetailContainer} />
        <Route path="/category/:categoryId" component={ItemListContainer}/>
        <Route path="/cart" component={Cart}/>
        </CartContextProvider>
      </Switch>
    </Router>
      </div>
  );
}

export default App;
