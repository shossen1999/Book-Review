import { NavLink } from "react-router-dom";


const Header = () => {

    // const links = <>
    //    <li><NavLink>Home</NavLink></li>
    //    <li><NavLink>Listed Books</NavLink></li>
    //    <li><NavLink>Pages to Read</NavLink></li>

    // </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink
                            className={({ isActive }) =>
                                isActive ? 'text-[#23BE0A] font-semibold text-[18px]' : 'font-semibold text-[18px] '
                            }
                            to="/">Home</NavLink></li>
                        <li><NavLink
                            className={({ isActive }) =>
                                isActive ? 'text-[#23BE0A] font-semibold text-[18px]' : 'font-semibold text-[18px] '
                            }
                            to="/books">Listed Books</NavLink></li>
                        <li><NavLink
                            className={({ isActive }) =>
                                isActive ? 'text-[#23BE0A] font-semibold text-[18px]' : 'font-semibold text-[18px] '
                            }
                            to="/pages">Pages to Read</NavLink></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-bold">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink
                        className={({ isActive }) =>
                            isActive ? 'text-[#23BE0A] font-semibold text-[18px] ' : 'font-semibold text-[18px] '
                        }
                        to="/">Home</NavLink></li>
                    <li><NavLink
                        className={({ isActive }) =>
                            isActive ? 'text-[#23BE0A] font-semibold text-[18px]' : 'font-semibold text-[18px] '
                        }
                        to="/books">Listed Books</NavLink></li>
                    <li><NavLink
                        className={({ isActive }) =>
                            isActive ? 'text-[#23BE0A] font-semibold text-[18px]' : 'font-semibold text-[18px] '
                        }
                        to="/pages">Pages to Read</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                <button className="btn btn-success text-white">Sign In</button>
                <button className="btn btn-active btn-primary text-white">Sign Up</button>
            </div>
        </div>
    );
};

export default Header;