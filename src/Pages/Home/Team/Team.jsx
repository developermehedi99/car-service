import team1 from '../../../assets/images/team/1.jpg'
import team2 from '../../../assets/images/team/2.jpg'
import team3 from '../../../assets/images/team/3.jpg'

import { FaFacebook, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Team = () => {
    return (
        <div className='my-12'>
            <div className="text-center mb-12">
                <h3 className="text-[#FF3811] text-xl font-bold">Team</h3>
                <h1 className="text-5xl font-bold text-black mb-5">Meet Our Team</h1>
                <p className="text-[#737373] text-base">the majority have suffered alteration in some form, by injected humour, or randomised <br></br> words which do not look even slightly believable. </p>
            </div>
            <div className='grid md:grid-cols-3 gap-6'>
                <div className='text-center'>
                    <img className=' rounded-lg' src={team1} alt="" />
                    <h1 className='text-2xl my-2'>Car Engine Plug</h1>
                    <p className='mb-2'>Engine Expert</p>
                    <div className=' list-none text-2xl gap-3'>
                        <ul className='flex gap-3 text-center mx-auto'>
                            <li><FaFacebook></FaFacebook></li>
                            <li><FaTwitter></FaTwitter></li>
                            <li><FaInstagramSquare></FaInstagramSquare></li>
                            <li><FaLinkedin></FaLinkedin></li>
                        </ul>
                    </div>
                </div>
                <div className=''>
                    <img className=' rounded-lg' src={team2} alt="" />
                    <h1 className='text-2xl my-2'>Car Engine Plug</h1>
                    <p className='mb-2'>Engine Expert</p>
                    <div className='flex list-none text-2xl gap-3'>
                        <li><FaFacebook></FaFacebook></li>
                        <li><FaTwitter></FaTwitter></li>
                        <li><FaInstagramSquare></FaInstagramSquare></li>
                        <li><FaLinkedin></FaLinkedin></li>
                    </div>
                </div>
                <div className=''>
                    <img className=' rounded-lg' src={team3} alt="" />
                    <h1 className='text-2xl my-2'>Car Engine Plug</h1>
                    <p className='mb-2'>Engine Expert</p>
                    <div className='flex list-none text-2xl gap-3'>
                        <li><FaFacebook></FaFacebook></li>
                        <li><FaTwitter></FaTwitter></li>
                        <li><FaInstagramSquare></FaInstagramSquare></li>
                        <li><FaLinkedin></FaLinkedin></li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;