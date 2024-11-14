import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

const AdminContact = () => {
  const [user, setuser] = useState([]);
  const { authorizationtoken } = useAuth();
  const getContactData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/contacts", {
        method: "GET",
        headers: { Authorization: authorizationtoken },
      });
      const data = await response.json();
      console.log(data);

      setuser(data);
    } catch (error) {
      console.log(error);
    }
  };

  //  delete User functionality
  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: { Authorization: authorizationtoken },
        }
      );
      const data = await response.json();
      if (response.ok) {
        getContactData();
      }
      console.log(`Users after delete: ${data}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactData();
  }, []);
  return (
    <>
      <h1 className="max-w-[1170px] mx-auto my-7 text-3xl text-white font-semibold tracking-wide font-lato">
        Admin Contact Data
      </h1>
      <table className="max-w-[1170px] w-full mx-auto text-sm text-left text-white">
        <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700">
          <tr>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Message</th>
            <th className="px-6 py-3">Delete</th>
          </tr>
        </thead>
        <tbody>
          {user.map((curr) => {
            const { _id, username, email, message } = curr;
            return (
              <tr
                key={_id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <td className="px-6 py-4">{username}</td>
                <td>{email}</td>
                <td className="px-6 py-4">{message}</td>
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

export default AdminContact;
