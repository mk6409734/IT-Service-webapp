import { NavLink } from "react-router-dom";
import '../App.css'
const Error = () => {
    return (
      <>
        <div className="flex flex-col justify-center text-center h-[70vh] text-white">
          <h1 className="header font-bold font-mono">404</h1>
          <h2 className="uppercase">Sorry! page not found</h2>
          <p className="max-w-96 mx-auto p-4">
            Oops! It seems like the page you're trying to access doesn't exist.
            If you believe there's an issue, feel free to report it, and we'll
            look into it.
          </p>
          <div className="mt-6">
            <NavLink
              to="/"
              className="rounded-lg  uppercase mx-3 p-3 px-4 border border-[#1423f7] hover:bg-[#4752ed] duration-200"
            >
              Return to Home
            </NavLink>
            <NavLink
              className="rounded-lg  uppercase mx-3 p-3 px-4 border border-[#1423f7] hover:bg-[#4752ed] duration-200"
              to="/contact"
            >
              Report Problem
            </NavLink>
          </div>
        </div>
      </>
    );
}

export default Error;