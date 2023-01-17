import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import workswiperDB from '../dbjson/swiperinfo.json';
import '../css/portfolio.css';

function Portfolio(props) {
    return (
        <div id="portfolio" className="pt-5">
            <Worksswiper></Worksswiper>
            <div className={`col-3 px-0`}>
                    {
                        workswiperDB.swiperjsonDB.map( (item, index)=> {
                            return (
                                <li key={'sw'+index}>{item.pofol.worktitle}</li>
                            )
                        })
                    }
                </div>

        </div>
    );
}

const Worksswiper = () => {
    const swiperinfo = workswiperDB.swiperjsonDB;
    return(
        <Swiper className='workSection'
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
        
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
   
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
        >
            {
                swiperinfo.map( ( item, index ) => {
                    return(
                        <SwiperSlide className={item.cls} key={'sw'+index}>{item.pofol.worktitle}</SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default Portfolio;