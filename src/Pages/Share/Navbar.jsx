import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
const Navbar = () => {
    const navItems = <div className='text-bold text-xl flex'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/service'>Service</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
    </div>
    return (
        <div className="navbar h-20 items-center bg-base-100 mb-5 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navItems
                        }
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl">
                    <img className='w-[154px] h-[60px]' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navItems
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/singUp'><img className='w-[85px] rounded-full' src="https://i.ibb.co/PGcQ0ZW/download-1.jpg" alt="" /></Link>
                <a className="btn text-red-500 border-red-500">Appointment</a>
            </div>
        </div>
    );
};

export default Navbar;