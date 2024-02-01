import Custome from '../../components/Custome/Custome'
import Desktop from '../../components/Desktop/Desktop'
import Laptop from '../../components/Laptops/Laptops'
import NewProducts from '../NewProducts/NewProduct'
import image from './image.png'

const HomePage = ()=>{
    return(
        <>
        <img src={image}alt=""/>
        <NewProducts/>
        <Custome/>
        <Laptop/>
        <Desktop/>
        </>
    )
}
export default HomePage