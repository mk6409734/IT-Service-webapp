import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const UpdateUser = () => {
  const [user, setuser] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const params = useParams();
  const { authorizationtoken } = useAuth();

  // Get single user data
  const getSingleUserdata = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: { Authorization: authorizationtoken },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Fetched single user data:", data);
        setuser(data); // Set the fetched data to user state
      } else {
        throw new Error("Failed to fetch user data");
      }
    } catch (error) {
      console.log("Error fetching single user data:", error);
      toast.error("Error fetching user data");
    }
  };

  useEffect(() => {
    getSingleUserdata();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setuser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     console.log("Data to be sent for update:", user);
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationtoken,
          },
          body: JSON.stringify(user), // Send updated user data
        }
      );
      if (response.ok) {
        toast.success("User updated successfully");
      } else {
        toast.error("Failed to update user");
      }
    } catch (error) {
      console.log("Error updating user:", error);
      toast.error("Error updating user");
    }
  };

  return (
    <div className="max-w-[1170px] mx-auto">
      <div className="flex flex-row justify-between">
        <div className="w-[500px]">
          <h1 className="text-4xl text-white font-lato my-5 font-bold border-b-4 w-[325px] border-[#2f3dfa]">
            Update User Data
          </h1>

          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label className="text-white my-3" htmlFor="username">
              Username
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="username"
              value={user.username}
              onChange={handleInput}
              type="text"
            />
            <label className="text-white my-3" htmlFor="email">
              Email
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="email"
              value={user.email}
              onChange={handleInput}
              type="email"
            />
            <label className="text-white my-3" htmlFor="phone">
              Phone
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="phone"
              value={user.phone}
              onChange={handleInput}
              type="text"
            />
            <div>
              <button
                className="text-left bg-[#1423f7] hover:bg-[#2f3dfa] p-3 my-4 rounded-lg text-white"
                type="submit"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
