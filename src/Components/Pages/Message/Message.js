import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Navbar from '../../Navbar/Navbar';
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdManageSearch } from "react-icons/md";
import { GoSignOut } from "react-icons/go";

const Message = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { toast.warning('LogOut Successfully', { autoClose: 500 }) })
            .catch(err => console.error(err))
    }

    <>

        {user?.uid ?
            <>
                <li className='font-bold'><button onClick={handleLogOut}>Sign Out</button></li>
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
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="message-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="message-drawer" className="drawer-overlay"></label>
                    <ul className="menu w-80  text-base-content ">

                        <li className='text-black hover:bg-red-500 hover:text-white font-bold '><Link to='/message'><AiOutlineUsergroupAdd className='text-xl' /> Add Student</Link></li>
                        <li className='font-bold hover:bg-red-500 hover:text-white '><Link to='/message/contact'><MdManageSearch className='text-xl' /> Manage Student</Link></li>
                        <span className='text-black mt-2 font-bold flex '><GoSignOut className='ml-5' /> <button className='ml-3' onClick={handleLogOut}>Sign Out</button></span>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Message;