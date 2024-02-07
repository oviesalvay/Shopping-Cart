
// import './App.css'
// import AboutProduct from './components/AboutProduct/AboutProduct'
// import AboutProduct from './components/AboutProduct/AboutProduct'
// import Custome from './components/Custome/Custome'
// import Desktop from './components/Desktop/Desktop'
// import Features from './components/Features/Features'
import AboutProduct from './components/AboutProduct/AboutProduct';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
// import Laptop from './components/Laptops/Laptops'
// import Product from './components/Product/Product'
// import Support from './components/Support/Support'
import HomePage from './pages/HomePage/Homepage'
// import NewProducts from './pages/NewProducts/NewProduct'
import {Routes,Route} from 'react-router-dom'
import {BrowserRouter as Router}  from "react-router-dom";
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';

function App() {
 

  return (
    <>
    <Router>
    <Header/> 
    <Routes>
     <Route path="/" element={<HomePage />} /> 
     <Route path="/about-product" element={<AboutProduct/>}/>
     <Route path='/shopping-cart' element={<ShoppingCart/>}/>
     </Routes>
     </Router>
     <Footer/>
    </>
  )
}

export default App