
import './ShoppingCart.scss'
import { useState } from 'react';
const ShoppingCart= ()=>{
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
		
	};
    return(
        <section className='shopping-cart'>
       
      <h3>Summary</h3>
      <h5>Estimate Shipping and Tax</h5>
      <div className="dropdown">
						<div className='search'>
							<div>
								<li>Searches</li>
							</div>
							<div className="dropdown-toggle" onClick={toggleDropdown}>
								<i className={`fa ${isDropdownOpen ? "fa-chevron-up" : "fa-chevron-down"}`} ></i>
							</div>
						</div>
						{isDropdownOpen && (
							<p>Enter your destination to get a shipping estimate.</p>
                )}
                </div>
        </section>
    )
}
export default ShoppingCart