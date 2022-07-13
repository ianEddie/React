import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./componets/Navbar";
import ItemCount from "./componets/ItemCount";
import ItemListContainer from "./Containers/ItemListContainer";
function App() {
  return (
    <div className="container-fluid appContainer">
      <Navbar />
      <ItemListContainer />
      <ItemCount />
    </div>
  );
}

export default App;
