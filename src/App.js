import Content from "./components/Content";
import ItemCount from "./components/ItemCount";

import NavBar from "./components/NavBar/NavBar";
import "./styles/styles.css"

function App() {

  const inicial = 1
  const max = 10

  return (
    <div className="App">
      <NavBar/>
      <div className="mainContent">
        <Content/>
      <ItemCount inicial = {inicial} max= {max}/>
      </div>
    </div>
  );
}

export default App;
