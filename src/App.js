import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./componets/ItemListContainer";
import Navbar from "./componets/Navbar";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <ItemListContainer />
    </div>
  );
}

export default App;
