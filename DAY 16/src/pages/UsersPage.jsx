import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserCard from '../components/UserCard';
function UsersPage({user}) {
 
    const [usersData, setUsersData] = useState([]);
  const getUsersData = async() => {
   const response = await axios.get("https://fakestoreapi.com/users");
    console.log(response.data);
    setUsersData(response.data);
  }
  useEffect(() => {
    getUsersData();
  }, [])
  return (
    <div className= "grid grid-cols-4 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
       {
      usersData.map((val) => (
        <UserCard key={val.id} user={val} />
      ))
    }
    </div>
   
  )
} 

export default UsersPage