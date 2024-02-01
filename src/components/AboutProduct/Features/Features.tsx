import ddr from './ddr.png'
import intel from './intel.png'
import gen from './gen.png'
import rtx from './rtx.png'
import './features.scss';
const Features = ()=>{
    return(
        <section className="features-content">
                <h2>Features</h2>
                <p>The MPG series brings out the best in gamers by allowing full expression in <br></br>
                    color with advanced RGB lighting control and synchronization.</p>
                    <section className='features'>
            <div>
                <img src={intel}alt=""/>
                <p>Featuring the latest 10th Gen Intel® Core™ processors, memory can support up to DDR4 2933MHz to delivers an unprecedented gaming experience.</p>
            </div>
            <div>
                <img src={ddr}alt=""/>
                <p>Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.</p>
            </div>
            <div>
                <img src={gen}alt=""/>
                <p>Unleash the full potential with the latest SSD technology, the NVM Express. 6 times faster than traditional SATA SSD.</p>
            </div>
            <div>
                <img src={rtx}alt=""/>
                <p>The new GeForce® RTX SUPER™ Series has more cores and higher clocks for superfast performance compared to previous-gen GPUs.</p>
            </div>
            </section>
        </section>
    )
}
export default Features;