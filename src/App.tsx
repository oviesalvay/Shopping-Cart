
import './App.css'
import Custome from './components/Custome/Custome'
import Desktop from './components/Desktop/Desktop'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Laptop from './components/Laptops/Laptops'
import HomePage from './pages/HomePage/Homepage'
import NewProducts from './pages/NewProducts/NewProduct'

function App() {
 

  return (
    <>
    <Header/> 
     <HomePage/>
     <NewProducts/>
     <Custome/>
     <Laptop/>
     <Desktop/>
     <Footer/>
    </>
  )
}

export default App
