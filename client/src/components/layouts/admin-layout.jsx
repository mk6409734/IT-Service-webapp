import { Navigate, NavLink, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { BsCardText } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { useAuth } from "../../store/auth";

const AdminLayout = () => {
  const { user, isloading } = useAuth();

  if(isloading){
    return <h1>Loading...</h1>
  }
  if(!user.isAdmin){
    return <Navigate to="/"/>
  }
    return (
      <>
        <header className="max-w-[1170px] mx-auto">
          <nav>
            <ul className="flex flex-row text-white">
              <li className="mx-3">
                <NavLink to="/admin/users">
                  <FaUser className="inline" />
                  Users
                </NavLink>
              </li>
              <li className="mx-3">
                <NavLink to="/admin/contact">
                  <FaMessage className="inline" /> Contacts
                </NavLink>
              </li>
              <li className="mx-3">
                <NavLink to="/admin/users">
                  <BsCardText className="inline" /> Services
                </NavLink>
              </li>
              <li className="mx-2">
                <NavLink to="/admin/users">
                  <FaHome className="inline mx-1" />
                  Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Outlet></Outlet>
      </>
    );
}

export default AdminLayout; 
