import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import workswiperDB from '../dbjson/swiperinfo.json';
import '../css/swiperbanner.css';
import { Link } from 'react-router-dom';

function Portfolio(props) {
    return (
        <div id="swiperbanner" className="pt-5">
            <Worksswiper></Worksswiper>
        </div>
    );
}

const Worksswiper = () => {
    const swiperinfo = workswiperDB.swiperjsonDB;
    return(
        <Swiper className='workSection'
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={42}
            slidesPerView={1.5}
            centeredSlides = {true}
            loop
        
            autoplay={{
                delay: 4000,
                pauseOnMouseEnter: false,
            }}
   
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
        >
            {
            swiperinfo.map((item, idx) => {
                // const myclass = item.cls.join(" ");
                   return (
                   <SwiperSlide key={'pofols'+ idx} className={item.pofol.cls} >
                    <Link to={item.pofol.href} className='d-flex justify-content-center align-items-center  flex-column h-100' >
                        <div className='position-relative text-white text-center'>
                            <h2>{item.pofol.worktitle[0]}</h2>
                            <p className='pt-5'>{item.pofol.worktitle[1]}</p>
                        </div>
                    </Link>                   
                    </SwiperSlide>
                   )
            })
        }
        </Swiper>
    )
}

export default Portfolio;