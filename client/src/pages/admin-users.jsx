import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import {Link} from "react-router-dom"

const AdminUsers = () => {
    const [user, setuser] = useState([])
    const {authorizationtoken} = useAuth()
    const getAllUserData = async() => {
        try {
            const response = await fetch(
              "http://localhost:5000/api/admin/users",
              {
                method: "GET",
                headers: { Authorization: authorizationtoken },
              }
            );
            const data = await response.json()
            console.log(data);
            
            setuser(data)
        } catch (error) {
            console.log(error);
            
        }
    }
    //  delete User functionality 
    const deleteUser = async (id) => {
        try {
          const response = await fetch(
            `http://localhost:5000/api/admin/users/delete/${id}`,
            {
              method: "DELETE",
              headers: { Authorization: authorizationtoken },
            }
          );
          const data = await response.json();
          if(response.ok){
            getAllUserData();
          }
          console.log(`Users after delete: ${data}`);
        } catch (error) {
          console.log(error);
          
        }
       
    }
    useEffect(() => {
        getAllUserData()
    },[])

  return (
    <>
    <h1 className="max-w-[1170px] mx-auto my-7 text-3xl text-white font-semibold tracking-wide font-lato">Admin User Data</h1>
      <table className="max-w-[1170px] w-full mx-auto text-sm text-left text-white">
        <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700">
          <tr>
            <th className="px-6 py-3">
              Name
            </th>
            <th  className="px-6 py-3">
              Email
            </th>
            <th  className="px-6 py-3">
              Phone
            </th>
            <th  className="px-6 py-3">
              Update
            </th>
            <th className="px-6 py-3">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {user.map((curr) => {
            const { _id, username, phone, email } = curr;
            return (
              <tr
                key={_id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <td className="px-6 py-4">{username}</td>
                <td>{email}</td>
                <td className="px-6 py-4">{phone}</td>
                <td className="px-6 py-4">
                  <Link to={`/admin/users/${_id}/edit`}>Edit</Link>
                </td>
                <td className="px-6 py-4">
                  <button
                    className="bg-[#f62626] rounded-full p-3"
                    onClick={() => deleteUser(_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default AdminUsers;
