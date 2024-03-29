import { useState } from "react"
import './aboutproduct.scss'
import Frame from '../AboutProduct/Frame.png'
import Group from '../AboutProduct/Group.png'
import image from '../AboutProduct/image.png'
import primary from '../AboutProduct/primary.png'
import OutPlay from "./OutPlay/OutPlay"
import Features from "./Features/Features"
import Product from "./Product/Product"
import ShoppingSupport from "../../pages/ShoppingCart/Support/Support"
import { Link } from "react-router-dom"
const AboutProduct =()=>{
    const [tab,setTab]=useState(0)
    return(
        <>
        <section className="about">
        <section className="about-product">
        <div className="about-btn">
            <hgroup>
            <button onClick={() => setTab(1)} className={tab === 1 ? 'current' : ''}>About Product</button>
            <button onClick={() => setTab(2)} className={tab ===2? 'current': ''}>Details</button>
            <button onClick={()=>setTab(3)}className={tab===3? 'current': ''}>Specs</button>
            </hgroup>
            <div className="flex1">
                <div>
                <p>On Sale from $3,299.00</p></div>
                <div>
            <input type='number' placeholder="1"/>
                </div>
                <Link to='/shopping-cart'>
                <div>
                    <button className="cart">Add to Cart</button>
                </div></Link>
                <div>
                    <img src={Frame}alt=""/>
                </div>
            </div>
        </div>
        <div className="flex2">
            <div className="review">
            <h1>MSI MPG Trident 3</h1>
            <p id="first">Be the first to review this product</p>
            <p>MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, 
                Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop</p>
                <p>Have a Question? Contact Us</p>
                <h5>+ More information</h5>
            <img src={Group}alt="" className="group"/>
            </div>
            <div>
                <img src={image} alt=""/>
            <div className="flex3">
<div>
              <img src={primary}alt=""/>

</div>
<div>
              <p>  own it now, up to 6 months <br></br>interest free learn more</p>
</div>
            </div></div>
        </div>
        </section>
        <OutPlay/>
        </section>
        <Product/>
        <Features/>
        <ShoppingSupport/>
        </>
    )
}
export default AboutProduct