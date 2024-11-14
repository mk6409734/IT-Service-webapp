import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import "../App.css";
import { useState } from "react";
import { useAuth } from "../store/auth";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);

  const {isLoggedIn} = useAuth();

  
    return (
      <>
        <header>
          <div className="min-h-16 flex flex-row justify-around mt-5 text-[#3544ec] font-semibold text-xl">
            <div>
              <a href="">MohitGautam</a>
            </div>
            <nav>
              {toggle ? (
                <AiOutlineClose
                  onClick={() => settoggle(!toggle)}
                  className="text-white text-2xl md:hidden block"
                />
              ) : (
                <AiOutlineMenu
                  onClick={() => settoggle(!toggle)}
                  className="text-white text-2xl md:hidden block"
                />
              )}
              <ul className="md:flex  gap-6 hidden">
                <li className="group">
                  <NavLink to="/">Home</NavLink>
                  <div className="w-[0px] h-[4px] bg-[#fff] transition-all ease-in-out group-hover:w-[50px] duration-500"></div>
                </li>
                <li className="group">
                  <NavLink to="/about">About</NavLink>
                  <div className="w-[0px] h-[4px] bg-[#fff] transition-all ease-in-out group-hover:w-[50px] duration-500"></div>
                </li>
                <li className="group">
                  <NavLink to="/contact">Contact</NavLink>
                  <div className="w-[0px] h-[4px] bg-[#fff] transition-all ease-in-out group-hover:w-[50px] duration-500"></div>
                </li>
                <li className="group">
                  <NavLink to="/service">Service</NavLink>
                  <div className="w-[0px] h-[4px] bg-[#fff] transition-all ease-in-out group-hover:w-[50px] duration-500"></div>
                </li>
                {isLoggedIn ? (
                  <li className="group">
                    <NavLink to="/logout">Logout</NavLink>
                    <div className="w-[0px] h-[4px] bg-[#fff] transition-all ease-in-out group-hover:w-[50px] duration-500"></div>
                  </li>
                ) : (
                  <>
                    <li className="group">
                      <NavLink to="/register">Register</NavLink>
                      <div className="w-[0px] h-[4px] bg-[#fff] transition-all ease-in-out group-hover:w-[50px] duration-500"></div>
                    </li>
                    <li className="group">
                      <NavLink to="/login">Login</NavLink>
                      <div className="w-[0px] h-[4px] bg-[#fff] transition-all ease-in-out group-hover:w-[50px] duration-500"></div>
                    </li>
                  </>
                )}
              </ul>
              {/* Responsive menu */}
              <ul
                className={` duration-300  md:hidden text-white fixed bg-black top-[90px] w-full text-center ${
                  toggle ? "left-[0]" : "left-[-100%]"
                }`}
              >
                <li className="p-3">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="p-3">
                  <NavLink to="/about">About</NavLink>
                </li>
                <li className="p-3">
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li className="p-3">
                  <NavLink to="/service">Service</NavLink>
                </li>
                {isLoggedIn ? (<li className="p-3">
                  <NavLink to="/logout">Logout</NavLink>
                </li>) : (
                  <>
                  <li className="p-3">
                    <NavLink to="/register">Register</NavLink>
                  </li>
                  <li className="p-3">
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  </>
                )}
                
              </ul>
            </nav>
          </div>
        </header>
      </>
    );
}
                  
                  


export default Navbar;