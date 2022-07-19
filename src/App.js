import "./App.css";
import Navbar from "./componets/Navbar";
import ItemCount from "./componets/ItemCount";
import ItemDetailContainer from "./Containers/ItemDetailContainer";

function App() {
  return (
    <div className="container-fluid appContainer">
      <Navbar />
      <ItemDetailContainer />
      <ItemCount />
    </div>
  );
}

export default App;
