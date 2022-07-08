import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./componets/ItemListContainer";
import Navbar from "./componets/Navbar";
import ItemCount from "./componets/ItemCount";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <ItemListContainer />
      <ItemCount />
    </div>
  );
}

export default App;
