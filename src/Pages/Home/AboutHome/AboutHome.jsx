import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const AboutHome = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-2/4 absolute top-1/2 left-1/3 border-8  rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <h1 className="text-3xl text-red-500 font-bold">About Us</h1>
                    <h1 className="text-5xl w-[370px] pt-4 pb-4  font-bold">We are qualified & of experience in this field</h1>
                    <p className="w-[480px] text-base text-[#737373] leading-7">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className="w-[480px] pt-3 pb-4 text-base text-[#737373] leading-7">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn bg-[#FF3811] rounded-md text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default AboutHome;