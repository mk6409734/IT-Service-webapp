import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../store/auth";
import {toast} from "react-toastify";


const Login = () => {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const {storetokenInLs} = useAuth()  
  const URL = `http://localhost:5000/api/auth/login`;

  const handleInput = (e) => {
    let {name, value} = e.target;
    

    setuser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(URL, {
        method:"POST",
        headers:{
          'Content-Type': "application/json",
        },
        body: JSON.stringify(user),
      })
      console.log("login form", response);
      const responseData = await response.json();
      console.log(responseData);
      
      if(response.ok){
        storetokenInLs(responseData.token);
        toast.success("Login Succesfully")
        setuser({email: "", password: ""});
        navigate("/")
      }else{
        toast.error(responseData ? responseData.extraDetails : responseData.message);
      }

    } catch (error) {
      console.log(error);
      
    }
  };
  return (
    <div className="max-w-[1170px] mx-auto px-4">
      <div className="flex md:flex-row flex-col justify-between items-center">
        <div className="flex justify-center w-full md:w-1/2">
          <img
            src="/images/login.png"
            alt="login"
            className="max-h-[500px] w-auto"
          />
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 ">
          <h1 className="text-4xl text-white font-bold mb-5 w-[200px] border-b-4 border-[#2f3dfa]">
            Login Form
          </h1>
          <form className="flex flex-col" onSubmit={handleSubmit}>
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

            <label className="text-white my-3" htmlFor="password">
              Password
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="password"
              value={user.password}
              onChange={handleInput}
              type="password"
            />
            <br />
            <div>
              <button
                className="text-left bg-[#1423f7] hover:bg-[#2f3dfa] p-3 rounded-lg text-white"
                type="submit"
              >
                Login Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

};

export default Login;
 