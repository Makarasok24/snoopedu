import React, { useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import Banner from '../components/Banner';

const HomePage = () => {

    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };

    const banners = [
        { _id: 1, url: "https://snoopedu.com/app/uploads/2021/10/Banner-1.jpg" },
        { _id: 2, url: "https://snoopedu.com/app/uploads/2021/10/Banner-2.jpg" },
        { _id: 3, url: "https://snoopedu.com/app/uploads/2021/10/Banner-3.jpg" },
        { _id: 4, url: "https://snoopedu.com/app/uploads/2021/10/Banner-4.jpg" },
    ];

    const CustomDot = ({ onClick, index, active }) => {
        return (
            <button
                className={`w-3 h-3 rounded-full mx-1 outline-1 cursor-pointer outline-[#30Ba96] transition-all duration-300 ${active ? "bg-[#30Ba96] scale-110" : "bg-white"
                    }`}
                onClick={onClick}
                aria-label={`${index + 1}`}
            />
        );
    };

    return (
        <div className='min-h-screen max-w-screen-2xl mx-auto px-4 lg:px-[40px]'>
            <span className='hidden md:block'>
                <img src="https://snoopedu.com/app/themes/snoopedu/resources/assets/images/ellipse1.svg" className='absolute left-1/2 top-0 transform -translate-x-1/2' alt="addon" />
            </span>
            <div className="relative ">
                <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5 lg:mt-15 xl:px-[8rem]">
                    <div className="text-[40px]  font-bold hidden lg:flex xl:w-[364px]">
                        We provide ed-tech solutions, curriculums, and educators training for effective STEAM learning in the classroom.
                    </div>
                    <div className="w-full lg:w-[608px] xl:w-[728px] md:mt-10">
                        <Carousel
                            className='cursor-pointer'
                            responsive={responsive}
                            draggable={true}
                            swipeable={true}
                            autoPlay={true}
                            arrows={false}
                            infinite={true}
                            partialVisible={false}
                            containerClass="carousel-container"
                            showDots={true}
                            customDot={<CustomDot />}
                        >
                            {banners.map((banner) => (
                                <Banner key={banner._id} bannerImage={banner.url} />
                            ))}
                        </Carousel>
                    </div>
                    <div className="text-[25px] md:text-[40px] font-bold lg:hidden">
                        <p className='text-center'>
                            We provide ed-tech solutions, curriculums, and educators training for effective STEAM learning in the classroom.
                        </p>
                    </div>
                    <button className="py-2 px-3 w-full md:hidden font-semibold text-lg text-white hover:text-black cursor-pointer bg-[#30Ba96] rounded-lg">
                        Login to Snoopedu
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomePage
