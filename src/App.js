import { useEffect } from "react";
import Footer from "./components/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Productss from "./pages/Products";
import { Route, Routes ,useLocation} from "react-router-dom";
import Navbar from "./pages/Navbar";
import ProductsDetail from "./pages/ProductsDetail";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/dashboard";
import DProducts from "./pages/dashboard/DProducts";
import AddProducts from "./pages/dashboard/AddProducts";
import User from "./pages/dashboard/User";
import EditData from "./pages/dashboard/EditData";

function App() {

  useEffect(() => {
    document.title = "React Material UI ";
  }, []);

  const location = useLocation();
  const showNavbarFooter = !['/login', '/signup','/admin'].includes(location.pathname)&&
  !/^\/admin\/[^/]+$/.test(location.pathname) ;


  return (
    <>
    {showNavbarFooter && <Navbar/> }
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/products" element={<Productss />} />
        <Route exact path="/productdetail" element={<ProductsDetail />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/admin/dashboard" element={<Dashboard />} />
        <Route exact path="/admin/dproducts" element={<DProducts />} />
        <Route exact path="/admin/addproducts" element={<AddProducts />} />
        <Route exact path="/admin/user" element={<User />} />
        <Route exact path="/admin/editdata" element={<EditData />} />
      </Routes>
      {showNavbarFooter && <Footer />}
    </>
  );
}

export default App;
