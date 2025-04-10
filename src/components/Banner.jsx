import React from 'react'

const Banner = ({ className, bannerImage }) => {
    return (
        <div className = {`h-[220px] md:h-[400px] lg:w-[608px] xl:w-[728px] rounded-2xl  ${className}`} >
            <img src={bannerImage} className='w-full h-full object-cover rounded-2xl' alt={bannerImage} />
        </div>
    )
}

export default Banner
