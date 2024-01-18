import './footer.scss'
import facebook from './facebook.png'
import instagram from './instagram.png'
import Groups from './Groups.png'
const Footer = ()=>{
    return(
        <footer>
  <h2>Sign Up To Our Newsletter.</h2> 
            <div className='footer-top'>
  <p>Be the first to hear about the latest offers.</p>         
  <div className="the-first">
    <div>
    </div>
    <div className='sub'>
        <input type="email" placeholder="Your Email"/>
        <div>
            <button className='subscribe'>Subscribe</button>
        </div>
    </div>
  </div>
  </div>
  <div className='footer-content'>
    <div>
  <h3>Information </h3> 
  <li> About Us</li> 
  <li> About Zip</li> 
  <li>Privacy Policy</li> 
  <li>Search Terms </li> 
  <li>Orders and Returns</li> 
  <li> Contact Us</li> 
  <li>Advanced Search</li> 
  <li>Newsletter Subscription</li>     
    </div>
    <div>
  <h3>PC Parts </h3>  
  <li> CPUS</li> 
  <li>  Add On Cards</li> 
  <li>Hard Drives (Internal)</li> 
  <li> Graphic Cards </li> 
  <li>  Keyboards / Mice </li> 
  <li> Cases/ Power Supplies / Cooling</li> 
  <li>RAM (Memory)</li> 
  <li> Software Speakers / Headsets</li>  
  <li>   Motherboards</li>   
    </div>
    <div>
  <h3>Desktop PCs </h3>    
  <li> Custom PCs</li> 
  <li> MSI All-In-One PCs</li> 
  <li> HP/Compaq PCs</li> 
  <li> ASUS PCs  </li> 
  <li>Tecs PCs</li>      
    </div>
    <div>
  <h3> Laptops </h3>   
  <li>Evryday Use Notebooks</li> 
  <li> MSI Workstation Series</li> 
  <li>MSI Prestige Series</li> 
  <li>  Tablets and Pads </li> 
  <li>Netbooks Infinity</li> 
  <li>  Gaming Notebooks</li>     
    </div>
    <div>
  <h3> Address</h3> 
  <li>Address: 1234 Street Adress City Address, 1234</li> 
  <li>    Phones: (00) 1234 5678</li> 
  <li>We are open: Monday-Thursday: 9:00 AM - 5:30 PM</li> 
  <li>  Friday: 9:00 AM - 6:00 PM </li> 
  <li> Saturday: 11:00 AM - 5:00 PM </li> 
  <li>  E-mail: shop@email.com </li>     
    </div> 
  </div>
  <div className='footer-bottom'>
    <div className='social-icon'>
<img src={facebook}alt=""/>
<img src={instagram}alt=""/>
    </div>
    <div>
    <img src={Groups}alt=""/>
    </div>
    <div>
        <p>Copyright © 2020 Shop Pty. Ltd.</p>
    </div>
  </div>
        </footer>
    )
}
export default Footer