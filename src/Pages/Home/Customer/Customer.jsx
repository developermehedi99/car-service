import quate from '../../../assets/icons/quote.svg'
import { IoIosStar } from "react-icons/io";

const Customer = () => {
    return (
        <div className=''>
             <div className="text-center mb-12">
                <h3 className="text-[#FF3811] text-xl font-bold">Testimonial</h3>
                <h1 className="text-5xl font-bold text-black mb-5">What Customer Says</h1>
                <p className="text-[#737373] text-base">the majority have suffered alteration in some form, by injected humour, or randomised <br></br> words which do not look even slightly believable. </p>
            </div>

            <div className='flex gap-7'>
                <div className='p-12 '>
                    <div className='flex '>
                        <img className='w-[60px] rounded-full mr-6' src="https://i.pinimg.com/474x/a7/f0/97/a7f09710e9439de83a09664d32f668bf.jpg" alt="" />
                        <div className='mr-20'>
                            <h1 className='text-2xl font-bold'>Jack ma</h1>
                            <h3>Business man</h3>
                        </div>
                        <img className='w-[50px]' src={quate} alt="" />
                    </div>
                    <p className='w-3/4 text-base text-[#737373] my-6'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <ul className='flex text-[#ff912c]'>
                        <li><IoIosStar></IoIosStar></li>
                        <li><IoIosStar></IoIosStar></li>
                        <li><IoIosStar></IoIosStar></li>
                        <li><IoIosStar></IoIosStar></li>
                        <li><IoIosStar></IoIosStar></li>
                    </ul>
                </div>
                <div className='p-12'>
                    <div className='flex '>
                        <img className='w-[60px] rounded-full mr-6' src="https://wallpapers.com/images/featured/jeff-bezos-bdb8zimqljhfcpu3.jpg" alt="" />
                        <div className='mr-20'>
                            <h1 className='text-2xl font-bold'>Jeff bezos</h1>
                            <h3>Business man</h3>
                        </div>
                        <img className='w-[50px]' src={quate} alt="" />
                    </div>
                    <p className='w-3/4 text-base text-[#737373] my-6'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <ul className='flex text-[#ff912c]'>
                        <li><IoIosStar></IoIosStar></li>
                        <li><IoIosStar></IoIosStar></li>
                        <li><IoIosStar></IoIosStar></li>
                        <li><IoIosStar></IoIosStar></li>
                        <li><IoIosStar></IoIosStar></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Customer;