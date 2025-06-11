import Navbar from "./components/NavBar";
import { ComponentsDetails } from "./pages/ComponentsDetails";
import "./App.css";
function App() {
  return (
    <div className="page-container">
      <Navbar />

      <ComponentsDetails />
    </div>
  );
}

export default App;
