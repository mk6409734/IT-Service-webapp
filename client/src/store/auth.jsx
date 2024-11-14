import {createContext, useContext, useEffect, useState} from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  const [token, settoken] = useState(localStorage.getItem('token'));
  const [user, setuser] = useState("");
  const [isloading, setisloading] = useState(true);
  const [services, setservices] = useState([]);
  const authorizationtoken = `Bearer ${token}`

  // const API = import.meta.env.VITE_APP_URI_API;

    const storetokenInLs = (serverToken) => {
      settoken(serverToken)
      return localStorage.setItem("token", serverToken);
    }

    let isLoggedIn = !!token;

    // Tackling Logout funtionality
    const LogoutUser = () => {
      settoken("")
      return localStorage.removeItem('token')
    }
    
    const userAuthentication = async () => {
      try {
        setisloading(true)
        const response = await fetch(`http://localhost:5000/api/auth/user`, {
          method: "GET",
          headers: {
            Authorization: authorizationtoken,
          },
        });
        
        if(response.ok){
          const data = await response.json()
          console.log('userdata', data.userData);
          setuser(data.userData) 
          setisloading(false)
        }else{
          console.error("Error fetching user data");
          setisloading(false);
        }
      } catch (error) {
        console.error("Error fetching user data")
      }
    }
    // to fetch the service data
    const getService = async() => {
      try {
        const response = await fetch(`http://localhost:5000/api/data/service`, {
          method: "GET",
        });
        if(response.ok){
          const data = await response.json();
          // console.log(data.msg);
          setservices(data.msg)
          
        }
      } catch (error) {
        console.log(`services frontend error: ${error}`);
        
      }
    }
    useEffect(() =>{
      getService()
      userAuthentication()
    },[])

    return (
      <AuthContext.Provider
        value={{
          storetokenInLs,
          LogoutUser,
          isLoggedIn,
          user,
          services,
          authorizationtoken,
          isloading,
          
        }}
      >
        {children}
      </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext)
} 