import { useNavigate } from "react-router";
import {useForm} from "react-hook-form"
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../features/AuthSlice";
import { useState } from "react";


export const useAuth = () => {
    let dispatch = useDispatch()
    let navigate = useNavigate();
    const [registeredUsers, setRegisteredUsers] = useState(() => {
        const users = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
        return Array.isArray(users) ? users : [];
    });

    let {register,handleSubmit,reset,formState:{errors}} = useForm();

    const registerForm = (data) => {
        const user = {
            name: data.name,
            email: data.email,
            password: data.password,
        };
        const updatedUsers = [...registeredUsers, user];

        localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        setRegisteredUsers(updatedUsers);
        dispatch(addUser(user));
        toast.success("User registered successfully");
        reset();
        navigate("/main");
    };
    const loginForm = (data) => {
        let user = registeredUsers.find((val) =>{
            return val.email === data.email && val.password === data.password
        });
        if(!user){
            toast.error("Invalid user")
            return;
        }
       
        dispatch(addUser(user))
        localStorage.setItem("loggedInUser",JSON.stringify(user));
         toast.success("Login successful");
        reset()
        navigate("/main")
    };

    return {
        navigate,
        register,
        handleSubmit,
        reset,
        errors,
        registerForm,
        loginForm
    }
};