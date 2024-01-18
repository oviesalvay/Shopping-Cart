import logo from './logo.png'
import './header.scss';
import cart from './cart.png'
import man from './man.png'
import search from './search.png'

const Header = () =>{
    return(
        <section className='header'>
        <div>
        <img src={logo}alt=""/>
        </div>
        <div>
        <p>Laptops</p>
        </div>
        <div>
     <p>Desktop PCs</p>
        </div>
        <div>
        <p>Networking Devices</p>
        </div>
        <div>
        <p>Printers & Scanners</p>
        </div>
        <div>
        <p>PC Parts</p>
        </div>
        <div>
            <p>All Other Products</p>
        </div>
        <div>
            <p>Repairs</p>
        </div>
       <div>
            <button className='deals'>Our Deals</button>
        </div>
        <div>
        <img src={search} alt=""/>
       </div>
       <div>
        <img src={cart} alt=""/>
       </div>
       <div>
        <img src={man} alt=""/>
       </div>
        </section>
    )
}
export default Header;