import { createContext, useState } from "react";

 export const Auth = createContext();

 export const AuthProvider = ({children}) => {
 const [registeredUsers , setRegisteredUsers] = useState(
     JSON.parse(localStorage.getItem("registeredUsers")) || [])
const [loggedinUsers , setloggedinUsers] = useState(
    JSON.parse(localStorage.getItem("LoggedInUsers")) || null)

 console.log(registeredUsers)
 console.log(loggedinUsers)
    return <Auth.Provider 
     value= {{registeredUsers,
    setRegisteredUsers,
    loggedinUsers,
    setloggedinUsers}} >
        {children}
    </Auth.Provider>
}