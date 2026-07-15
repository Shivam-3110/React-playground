import axios from "../api/axiosconfig";

 export const asyncgetusers = ()=> async(dispatch, getState)=>{
    try{
       const res = await axios.get("/users");
       console.log(res.data);
       loaduser(res.data);
    }
    catch(err){
        console.error("Error fetching users:", err);
    }
}