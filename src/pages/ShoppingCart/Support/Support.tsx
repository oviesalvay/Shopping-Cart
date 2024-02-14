import './Support.scss'
import Account from './Account.png'
import Saving from  './Saving.png'
import Supports from  './Supports.png'
const ShoppingSupport = ()=>{
    return(
        <section className="support-intro introduction">
<div>
    <img src={Supports}alt=''/>
    <h5>Product Support</h5>
    <p>Up to 3 years on-site warranty available for your peace of mind.</p>
</div>
<div>
    <img src={Account}alt=''/>
    <h5>Personal Account</h5>
    <p>With big discounts, free delivery and a dedicated support specialist.</p>
</div>
<div>
    <img src={Saving}alt=""/>
    <h5>Amazing Savings</h5>
    <p>Up to 70% off new Products, you can be sure of the best price.</p>
</div>
        </section>
    )
}
export default ShoppingSupport