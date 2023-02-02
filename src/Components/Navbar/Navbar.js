import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const menuItmes = <>

        {user?.uid ?
            <>
                {user?.displayName ?
                    <p className='py-4 font-semibold text-[18px] text-purple-600 mr-2'>Welcome {user?.displayName} </p>
                    :
                    <></>
                }
            </>
            :
            <li className='font-bold'><Link to='/login'>Login</Link></li>
        }
        {user?.photoURL ?
            <img className=' w-12 h-12 rounded-full dark:bg-gray-500'
                src={user?.photoURL} alt=""></img>
            :
            <></>
        }

    </>

    return (
        <div >
            <div>
                <div className="navbar  flex justify-between">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                                <ul className="menu menu-horizontal px-1">
                                    {menuItmes}
                                </ul>
                            </ul>
                        </div>
                        {/* <Link to='/' className="btn btn-ghost normal-case text-xl">Home</Link> */}
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {menuItmes}
                        </ul>
                    </div>
                    <label htmlFor="message-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;