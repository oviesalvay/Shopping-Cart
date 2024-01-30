import '../Summary/summary.scss'
import palpay from '../Summary/palpay.png'
 import zip from '../Summary/zip.png'
const Summary = ()=>{
     
return(
    <section className="summary-content">
    <h3>Summary</h3>
    <h5>Estimate Shipping and Tax</h5>
    <p>Enter your destination to get a shipping estimate.</p>
    <h5>Apply Discount Code</h5>
    <div className='summary'>
        <div>
        <h5>Subtotal</h5>
        </div>
        <div>
<h6>$13,047.00</h6>
        </div>
    </div>
    <div className='summary'>
        <div>
        <h5>Shipping</h5>
        <p>(Standard Rate - Price may vary <br></br>depending on the item/destination.<br></br> TECS Staff will contact you.)</p>
        </div>
        <div>
<h6>$21.00</h6>
        </div>
    </div>
    <div className='summary'>
        <div>
        <h5>Tax</h5>       
        </div>
        <div>
<h6>$1.91</h6>
        </div>
    </div>
    <div className='summary'>
        <div>
        <h5>GST (10%)</h5>       
        </div>
        <div>
<h6>$1.91</h6>
        </div>
    </div>
    <div className='summary'>
        <div>
        <h5>Order Total</h5>       
        </div>
        <div>
<h6>$1.91</h6>
        </div>
    </div>
   <button className='checkout-proceed'>Proceed to Checkout</button>
   <div className='checkout-btn'>
   <button className='checkout'>Check out with</button>
    <img src={palpay}alt=''/>
   </div>
   <button className='checkout'>Check Out with Multiple Addresses</button>
   <div className='summary-bottom'>
    <div>
   <img src={zip}alt=''/>
    </div>
   <p>own it now, up to 6 months interest free learn more</p>
   </div>
    </section>
)
}
export default Summary;