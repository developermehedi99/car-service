import icon1 from '../../../assets/icons/check.svg'
import icon2 from '../../../assets/icons/deliveryt.svg'
import icon3 from '../../../assets/icons/Wrench.svg'
import icon4 from '../../../assets/icons/group.svg'
import icon5 from '../../../assets/icons/person.svg'
import icon6 from '../../../assets/icons/Wrench.svg'

const Why = () => {
    return (
        <div className='py-16'>
             <div className="text-center mb-12">
                <h3 className="text-[#FF3811] text-xl font-bold">Core Features</h3>
                <h1 className="text-5xl font-bold text-black mb-5">Why Choose Us</h1>
                <p className="text-[#737373] text-base">the majority have suffered alteration in some form, by injected humour, or randomised <br></br> words which do not look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-6 my-7'>
                <div className='text-center'>
                    <img className='mx-auto mb-3' src={icon1} alt="" />
                    <h2>Expert Team</h2>
                </div>
                <div className='text-center'>
                    <img className='mx-auto mb-3' src={icon2} alt="" />
                    <h2>Expert Team</h2>
                </div>
                <div className='text-center'>
                    <img className='mx-auto mb-3' src={icon3} alt="" />
                    <h2>Expert Team</h2>
                </div>
                <div className='text-center'>
                    <img className='mx-auto mb-3' src={icon4} alt="" />
                    <h2>Expert Team</h2>
                </div>
                <div className='text-center'>
                    <img className='mx-auto mb-3' src={icon5} alt="" />
                    <h2>Expert Team</h2>
                </div>
                <div className='text-center'>
                    <img className='mx-auto mb-3' src={icon6} alt="" />
                    <h2>Expert Team</h2>
                </div>
            </div>
        </div>
    );
};

export default Why;