import{ BrowserRouter, Routes, Route } from 'react-router-dom'
import Content from "./components/Content";
import Home from './components/Home';
import ItemCount from "./components/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import NavBar from "./components/NavBar/NavBar";
import "./styles/styles.css"

function App() {

  const inicial = 1
  const max = 10

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
            path="/detalle/:id"
            element={ <ItemDetailContainer/> }
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