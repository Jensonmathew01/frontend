import { useState } from 'react'
import './App.css'
import Role from './components/Role'
import Userlogin from './components/Userlogin'
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import Adminlogin from './components/Adminlogin';
import AdminAuth from './components/AdminAuth';
import Product from './components/product';
import Productsearch from './components/Productsearch';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import AdminDashbord from './components/AdminDashbord';
import Mainpage from './components/SignUp';
import SignUp from './components/SignUp';
import CartContext from './context/Cartcontext';
import ProductDetails from './components/ProductDetails'
import UserProfile from './components/UserProfile';
import Orders from './components/Orders';
import Auth from './components/Auth';
import ProductForm from './components/ProductForm';
function App() {
   const [cart,setCart] = useState([]);
   
  return (
    <>
    
    
    <Router>
      <Routes>
        <Route path="/" element={<Role />} />
        <Route path="/admin" element={<Adminlogin />} />
        <Route path="/user" element = {<Userlogin/>}></Route>
        <Route path='/signup'element={<SignUp></SignUp>}></Route>      
        <Route element={<Auth/>}>
        <Route path="/protected" element={<h1>Super secret info here</h1>} />
        <Route  path='/product'element={<Product/>}/>
        <Route path="/cart" element = {<Cart/>}></Route>
        <Route path="/productsearch/:productName" element={<Productsearch />} />
        <Route path='/productdetail/:productName' element={<ProductDetails/>}></Route>
        <Route path='/profile' element={<UserProfile/>}></Route>
        <Route path='/orders' element={<Orders/>}></Route>
        </Route>
        <Route element={<AdminAuth/>}>
        <Route path="/dashboard" element={<AdminDashbord></AdminDashbord>}/>
        <Route path='/update/:id' element={<ProductForm/>}/>
        </Route>
      </Routes>
  </Router>

  </>
  );
}
export default App;