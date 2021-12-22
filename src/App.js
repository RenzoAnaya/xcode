import{ BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Cart from './components/NavBar/Cart';


import NavBar from "./components/NavBar/NavBar";
import "./styles/styles.css"

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        
        <NavBar/>
        <div className="mainContent">
          <Routes>
            <Route 
            exact
            path="/" 
            element={ <Home/> } 
            />
            
            <Route 
            exact
            path="/categoria/:idCate"
            element ={ <ItemListContainer/> }
            />

            <Route
            exact
            path="/detalle/:idUno"
            element={ <ItemDetailContainer/> }
            />

            <Route
            exact
            path="/cart"
            element={<Cart/>} 
            />

          </Routes>
          
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;


/*<Route
<ItemCount inicial = {inicial} max= {max}/>
*/