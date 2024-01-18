

import { SwiperSlide } from 'swiper/react'
import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import desktop from './desktop.png'
import image2 from './image2.png'
import image1 from './image1.png'
// import image4 from './image4.png'
import Group from './Group.png'
const Desktop =()=>{
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
                                        <img src={desktop} alt=""/>
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
                                    <p><p> <SwiperSlide>
                                    <div className='product-content'>
                                        <img src={image1} alt=""/>
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
                                    </p></p>
                                    </Swiper>
        </section>
    )
}
export default Desktop;