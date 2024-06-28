import "./App.css";
import CustomAlbumContext from "./albumContext";
import Albums from "./components/Albums";
// import Items from "./components/Items";
import Navbar from "./components/Navbar";
// import CustomItemContext, { useValue } from "./itemContext";

function App() {
  return (
    // providing multiple contexts
    <CustomAlbumContext>
      <div className="App">
        <h2>Album App</h2>
        
        <Navbar />
        <Albums/>
      </div>
    </CustomAlbumContext>
  );
}
export default App;
