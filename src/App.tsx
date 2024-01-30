
import './App.css'
import AboutProduct from './components/AboutProduct/AboutProduct'
// import AboutProduct from './components/AboutProduct/AboutProduct'
import Custome from './components/Custome/Custome'
import Desktop from './components/Desktop/Desktop'
// import Features from './components/Features/Features'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Laptop from './components/Laptops/Laptops'
// import Product from './components/Product/Product'
// import Support from './components/Support/Support'
import HomePage from './pages/HomePage/Homepage'
import NewProducts from './pages/NewProducts/NewProduct'
import ShoppingCart from './pages/ShoppingCart/ShoppingCart'
// import {Routes,} from 'react-router-dom'
function App() {
 

  return (
    <>
    <Header/> 
    {/* <Routes> */}
     <HomePage/>
     <NewProducts/>
     <Custome/>
     <Laptop/>
     <Desktop/>
     <AboutProduct/>
     {/* <Product/> */}
     {/* <Features/> */}
     {/* <Support/> */}
     <ShoppingCart/>
     {/* </Routes> */}
     <Footer/>
    </>
  )
}

export default App
