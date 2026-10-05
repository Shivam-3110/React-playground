import { createContext, useState } from "react";

 export const Auth = createContext();

 export const AuthProvider = ({children}) => {
const [registerdUsers , setRegisteredUsers] = useState([])
const [loggedinUsers , setloggedinUsers] = useState([null])

    return <Auth.Provider value={{registerdUsers,setRegisteredUsers,loggedinUsers,setloggedinUsers}} >
        {children}
    </Auth.Provider>
}