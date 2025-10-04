import React from 'react';
import image from '../assets/pngwing 1.png'
const Banner = () => {
    return (
        <div className='flex md:flex-row flex-col-reverse  items-center justify-between px-30 py-16 bg-[#f3f3f3] mb-25 rounded-xl md:gap-0 gap-5'>
            <div>
                <h2 className='playfair md:text-5xl text-3xl mb-5 '>Books to freshen up <br /> your bookshelf</h2>
                <button className='btn text-white bg-green-500 worksans'>View The List</button>
            </div>
            <div>
                <img src={image} alt="banner-image" />
            </div>
        </div>
    );
};

export default Banner;