import Rectangle from '../OutPlay/Rectangle.png'
import './outplay.scss'

const OutPlay=()=>{
   
    return(
        <section className="outplay">
        <div className='outplay-content'>
            <h1>Outplay the Competittion</h1>
            <p>Experience a 40% boost in computing from last generation. <br></br>MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with <br></br>the upmost computing power
                 to bring you an unparalleled gaming experience.</p>
                 <p>Performance compared to i7-9700. Specs varies by model.</p>
        </div>
        <div>
            <img src={Rectangle}alt="" className='core'/>
        </div>
        </section>
    )
}
export default  OutPlay