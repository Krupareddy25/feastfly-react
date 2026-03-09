import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
          <Footer />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
export default App;
