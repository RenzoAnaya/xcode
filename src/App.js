import Content from "./components/Cotent";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer"
import "./styles/styles.css"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting='Hola soy ItemListContainer' />
      <Content/>
      
    </div>
  );
}

export default App;
