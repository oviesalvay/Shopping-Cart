import Supports from '../Support/Supports.png'
import Saving from '../Support/Saving.png'
import Account from '../Support/Account.png'
import './Support.scss'
const Support = ()=>{
    return(
        <section className="support">
<div>
    <img src={Supports} alt=""/>
    <h4>Product Support</h4>
    <p>Up to 3 years on-site<br></br> warranty available for your peace of mind.</p>
</div>
<div>
    <img src={Saving} alt=""/>
    <h4>Amazing Savings</h4>
    <p>Up to 70% off new Products,<br></br> you can be sure of the best price.</p>
</div>
<div>
    <img src={Account}alt=""/>
    <h4>Personal Account</h4>
    <p>With big discounts, free <br></br>delivery and a dedicated support specialist.</p>
</div>
        </section>
    )
}
export default Support;