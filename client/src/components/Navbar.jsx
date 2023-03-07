import { NavLink } from "react-router-dom";
import logo from "/images/dark-bg.png";

function Navbar() {
    // @notice {navLinks} is a mapping of an array that contains another array that has
    // the navigation link name and URL it will be directed to when activated.
    // @params {isActive} is a built in params in NavLink component from react-router-dom
    // that tracks if the NavLink is currently active or not.
    const navLinks = [
        ["Home", "/"],
        ["Movies", "/movies"],
        ["Series", "/series"],
        ["About Us", "/about"],
        ["Contact Us", "/contact"],
    ].map(([linkName, linkUrl], i) => (
        <li key={i}>
            <NavLink
                to={linkUrl}
                className={({ isActive }) =>
                    isActive
                        ? "bg-secondary text-primary mx-1"
                        : "active:bg-secondary active:text-primary mx-1"
                }
            >
                {linkName}
            </NavLink>
        </li>
    ));

    // @notice {userLinks} is a mapping of an array that contains another array that has
    // the navigation link name and URL it will be directed to when activated.
    // @params {isActive} is a built in params in NavLink component from react-router-dom
    // that tracks if the NavLink is currently active or not.
    const userLinks = [
        ["Login", "/login"],
        ["Register", "/register"],
    ].map(([linkName, linkUrl], i) => (
        <li key={i}>
            <NavLink
                to={linkUrl}
                className={({ isActive }) =>
                    isActive
                        ? "bg-secondary text-primary mx-1"
                        : "active:bg-secondary active:text-primary mx-1"
                }
            >
                {linkName}
            </NavLink>
        </li>
    ));

    return (
        <div className="navbar bg-primary text-secondary py-0">
            <div className="navbar-start">
                <img
                    src={logo}
                    alt="Vertuze Digital Tech Logo"
                    className="w-16"
                />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {/* Render {navLinks} here */}
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {/* Render {userLinks} here */}
                        {userLinks}
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-secondary rounded-box w-52"
                    >
                        {/* Render {navLinks} and {userLinks} here */}
                        {navLinks}
                        <div className="divider" />
                        {userLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
