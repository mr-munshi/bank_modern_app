import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants"

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className="w-full py-6 flex justify-between items-center navbar">
            <a href={`#`}>
                <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
            </a>
            <ul className="list-none sm:flex hidden flex-1 justify-end items-center">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-normal text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
                        <a href={`#${nav.link}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>

            {/* MOBILE MENU */}
            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={() => setToggle((prev) => !prev)} />
                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className="list-none flex flex-1 flex-col justify-end items-center">
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-normal text-[16px] text-white ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}>
                                <a href={`#${nav.id}`}>
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar