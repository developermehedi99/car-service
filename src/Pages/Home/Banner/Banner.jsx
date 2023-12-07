import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
const Banner = () => {
    return (
        <div className=" carousel h-[600px] w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-lg" />
                <div className='bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]
                absolute left-0 right-0 rounded-lg top-0 h-full text-white flex items-center 
                '>
                    <div className='w-1/3 pl-12'>
                        <h1 className='text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p className=' text-lg py-7'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                        <button className="btn  bg-orange-400 border-orange-400 text-white">Discover More</button>
                        <button className="btn btn-outline ml-5 btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item h-[600px] relative w-full">
                <img src={img2} className="w-full" />
                <div className='bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]
                absolute left-0 right-0 top-0 h-full text-white flex items-center 
                '>
                    <div className='w-1/3 pl-12'>
                        <h1 className='text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p className=' text-lg py-7'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                        <button className="btn  bg-orange-400 border-orange-400 text-white">Discover More</button>
                        <button className="btn btn-outline ml-5 btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item h-[600px] relative w-full">
                <img src={img3} className="w-full" />
                <div className='bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]
                absolute left-0 right-0 top-0 h-full text-white flex items-center 
                '>
                    <div className='w-1/3 pl-12'>
                        <h1 className='text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p className=' text-lg py-7'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                        <button className="btn  bg-orange-400 border-orange-400 text-white">Discover More</button>
                        <button className="btn btn-outline ml-5 btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item h-[600px] relative w-full">
                <img src={img4} className="w-full" />
                <div className='bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]
                absolute left-0 right-0 top-0 h-full text-white flex items-center 
                '>
                    <div className='w-1/3 pl-12'>
                        <h1 className='text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p className=' text-lg py-7'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                        <button className="btn  bg-orange-400 border-orange-400 text-white">Discover More</button>
                        <button className="btn btn-outline ml-5 btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;