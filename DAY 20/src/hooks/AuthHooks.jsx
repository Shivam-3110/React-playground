import { useNavigate } from "react-router";
import {useForm} from "react-hook-form"
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../features/AuthSlice";


export const useAuth = () => {
    let dispatch = useDispatch()
    let navigate = useNavigate();
    const [registeredUsers,setRegisteredUsers] = useState(JSON.parse(localStorage.getItem("registeredUsers")));

    let {register,handleSubmit,reset,formState:{errors}} = useForm();

    const registerForm = (data) => {
        let arr = [...registeredUsers,data]
        setRegisteredUsers(arr)
        localStorage.setItem("registeredUsers",JSON.stringify(registeredUsers));
        toast.success("user registered successfully")
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
         toast.success("Login Sucessfull");
        reset()
        navigate("/Home")
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