import image from '../ShoppingCart/image.png'
import images from '../ShoppingCart/images.png'
import './ShoppingCart.scss'
import Summary from './Summary/Summary'
import ShoppingSupport from './Support/Support'

const ShoppingCart= ()=>{

    return(
		<>
		<section className='shopping-intro'>
			<div>
       <div className='cart-header'>
     <h3>Shopping Cart</h3>
 </div>
        <section className='shopping-cart'>
			<div>
 <div className='cart-details'>
<div>
	<img src={image}alt=""/>
</div>
<div>
	<h4>Item</h4>
	<p>MSI MEG Trident X 10SD-1012AU Intel i7 10700K, <br></br>2070 SUPER, 
		32GB RAM, 1TB SSD, Windows 10<br></br> Home, Gaming Keyboard and Mouse 3 Years Warranty</p>
</div>
<div>
	<h4>Price</h4>
	<p>$4,349.00</p>
</div>
<div>
	<h4>Qty</h4>
	<input type="number" placeholder="1"/>
</div>
<div>
	<h4>Subtotal</h4>
	<p>$13,047.00</p>
</div>
 </div></div>
 <div>
 <div className='cart-details'>
<div>
	<img src={images}alt=""/>
</div>
<div>
	<h4>Item</h4>
	<p>MSI MEG Trident X 10SD-1012AU Intel i7 10700K, <br></br>2070 SUPER, 
		32GB RAM, 1TB SSD, Windows 10<br></br> Home, Gaming Keyboard and Mouse 3 Years Warranty</p>
</div>
<div>
	<h4>Price</h4>
	<p>$4,349.00</p>
</div>
<div>
	<h4>Qty</h4>
	<input type="number" placeholder="1"/>
</div>
<div>
	<h4>Subtotal</h4>
	<p>$13,047.00</p>
</div>
 </div></div>
 <div className='shopping-btn'>
	<div>
	<button className='continue'>Continue Shopping</button>
 <button className='clear'>Clear Shopping Cart</button>
	</div>
	<div>
 <button className='clear'>Update Shopping Cart</button>
	</div>
 </div>
        </section>
		</div>
		<div>
		<Summary/>
		</div>
		</section>
		<ShoppingSupport/>
		</>
    )
}
export default ShoppingCart