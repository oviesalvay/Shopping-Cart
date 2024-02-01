import image from  '../Product/arrow.png'
import arrow from './image.png'
import './product.scss'
const Product = ()=>{
    return(
        <section className="products-content">
            <div>
            <div className='product'>
<div>
    <p>Product Support</p>
</div>
<div>
    <img src={image}alt=""/>    
</div>
</div>
<div className='product'>
<div>
    <p>FAQ</p>
</div>
<div>
    <img src={image}alt=""/>    
</div>
</div>
<div className='product'>
<div>
    <p>Our Buyer Guide</p>
</div>
<div>
    <img src={image}alt=""/>    
</div>
</div>
</div>
<div>
    <img src={arrow}alt="" className="group"/>
</div>
        </section>
    )
}
export default Product;