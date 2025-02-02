import { useContext, useEffect, useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/firebaseProvider/FirebaseProvider";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip"; 

const NavBar = () => {
    const {user, logout} = useContext(AuthContext);

    // Toggle 'Dark' and 'Light' theme
    const [theme, setTheme] = useState(localStorage.getItem("theme")? localStorage.getItem("theme") : "light");
    const handleToggle = (e) =>{
        if(e.target.checked){
            setTheme("dark");
        }
        else{
            setTheme('light');
        }
    }
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute('data-theme', localTheme)
    },[theme]);
    // console.log(user);
    
    const navLinks=<>
        <li className="md:hover:text-orange-600 font-extrabold"><NavLink to="/">Home </NavLink></li>
        <li className="md:hover:text-orange-600 font-medium"><NavLink to="/all/tourists/spot">All Tourists Spot</NavLink></li>
        {user?<li className="md:hover:text-orange-600 font-medium"><NavLink to="/add/tourists/spot">Add Tourists Spot </NavLink></li> : ''}
        {user?<li className="md:hover:text-orange-600 font-medium"><NavLink to="/myList">My List</NavLink></li> : ''}
        {user?<li className="md:hover:text-orange-600 font-medium"><NavLink to="/add/country">Add Country</NavLink></li> : ''}
        <li className="md:hover:text-orange-600 font-medium"><NavLink to="/about">About Us</NavLink></li>  
        {
            user? '' : <div>
            <li className="md:hidden"><NavLink to="/login">Sign in</NavLink></li>
            <li className="md:hidden"><NavLink to="/register">Sign up</NavLink></li>
        </div>
        }
            
    </>

    const myFunction = () =>{

        Swal.fire({
            title: 'Success!',
            text: 'Logout Successful!',
            icon: 'success',
            confirmButtonText: 'OK',
        })
        logout();
        location.reload();
    }

    return (
    <div className="navbar bg-stone-600 p-3">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-outline btn-sm text-white lg:hidden">
                    
                    <FiAlignJustify className="w-5 h-5"/>

                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                    {navLinks}
                </ul>
            </div>
            <div className="ml-3 lg:ml-0 text-white">
                <Link to='/' className="text-2xl md:text-4xl font-bold flex">
                    <div className="relative">
                        <h1 className="font-Tangerine">Explore<span className="text-amber-500">Southeast</span>Asia</h1> 
                        <p className="text-xs font-extrabold absolute top-7 right-0 text-white">Best Tourism</p>
                    </div>
                </Link>
            </div>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white">
                    {navLinks}
            </ul>
        </div>
        
        <div className="navbar-end">
            <div className="flex justify-center items-center mr-5 text-white rounded-full">
                <label className="swap swap-rotate">
                    <input 
                    
                        type="checkbox" 
                        onChange={handleToggle} className="theme-controller"  value="synthwave" 
                        checked = {theme === 'light'? false : true}
                    
                    />
                    
                    <svg className="swap-off fill-current w-8 h-8 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                    
                    <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                    
                </label>
            </div>

            {
                user?<div className="flex justify-center items-center gap-2">

                    <div className="dropdown dropdown-bottom dropdown-end dropdown-hover">
                        <div tabIndex={0}>
                            <div className="w-12 h-12" data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} data-tooltip-place="left">
                                
                                {user?.photoURL ?(
                                    <img className="w-12 h-12 rounded-full" src={user.photoURL} alt="User profile"/>
                                ) : (
                                    <img className="w-12 h-12 rounded-full" src="https://i.ibb.co/Jq10C13/user.png" alt="User profile"/>
                                )}
                                
                            </div>
                        </div>
                        <div className="dropdown-content z-[1] menu">
                            <NavLink to="/">
                                <button onClick={myFunction} className="btn btn-sm bg-black text-white">Logout</button> 
                            </NavLink>
                        </div>
                    </div>

                </div>
                :
                <div className="space-x-3 hidden md:flex">
                    <Link className="btn btn-sm btn-outline text-white" to="/login">Sign in</Link>
                    <Link className="btn btn-sm btn-outline text-white" to="/register">Sign up</Link>
                </div>
            }
        </div>
        <Tooltip id="my-tooltip" />
    </div>
    );
};

export default NavBar;