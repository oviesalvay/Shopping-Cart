import { SwiperSlide } from 'swiper/react'
import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import image1 from './image1.png'
import image2 from './image2.png'
import image3 from './image3.png'
import image4 from './image4.png'
import Group from './Group.png'

const Laptop =()=>{
    return(
        <section className='custome'>
  <Swiper className='swipe-slide'
                                modules={[Navigation]}
                                spaceBetween={14}
                                slidesPerView={1}
                                navigation={true}
                                loop={true}
                                pagination={{ clickable: true }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 1
                                    },
                                    900: {
                                        slidesPerView: 3
                                    },
                                    1100: {
                                        slidesPerView: 4
                                    }
                                }}>
                                    <SwiperSlide>
                                    <div className='product-content'>
                                        <img src={image1} alt=""/>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className='product-content'>
                                        <img src={image2} alt=""/>
                                        <div className='reviews'>
                                            <div>
                                                <img src={Group}alt=""/>
                                            </div>
                                            <div>
                                                <p>Reviews (4)</p>
                                            </div>
                                            </div>
                                        <p>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
                                        <del>$499.00 </del> <p> $499.00</p>
                                    </div>
                                    </SwiperSlide>
                                  
                                         <SwiperSlide>
                                    <div className='product-content'>
                                        <img src={image3} alt=""/>
                                        <div className='reviews'>
                                            <div>
                                                <img src={Group}alt=""/>
                                            </div>
                                            <div>
                                                <p>Reviews(4)</p>
                                            </div>
                                            </div>
                                        <p>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
                                        <del>$499.00 </del> <p> $499.00</p>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className='product-content'>
                                        <img src={image4} alt=""/>
                                        <div className='reviews'>
                                            <div>
                                                <img src={Group}alt=""/>
                                            </div>
                                            <div>
                                                <p>Reviews (4)</p>
                                            </div>
                                            </div>
                                        <p>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
                                        <del>$499.00 </del> <p> $499.00</p>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className='product-content'>
                                        <img src={image2} alt=""/>
                                        <div className='reviews'>
                                            <div>
                                                <img src={Group}alt=""/>
                                            </div>
                                            <div>
                                                <p>Reviews (4)</p>
                                            </div>
                                            </div>
                                        <p>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
                                        <del>$499.00 </del> <p> $499.00</p>
                                    </div>
                                    </SwiperSlide>
                                  
                                    </Swiper>
        </section>
    )
}
export default Laptop;