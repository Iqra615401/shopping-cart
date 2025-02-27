import './App.css';
import { Routes , Route } from "react-router-dom"
import Home from "../src/pages/home"
import Cart from "../src/pages/cart"
import Header from './components/header/Header';


function App() {
  return (
    <div>
     <Header />
     <Routes>
      <Route exact path="/" element={<Home />} />
      <Route  path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
