import React, { useEffect, useState } from 'react'

import UserCard from '../components/UserCard';
import { axiosInstance } from '../config/axiosInstance';
function UsersPage() {
 
    const [usersData, setUsersData] = useState([]);
     const [isLoading, setIsLoading] = useState(true);  
  const getUsersData = async() => {
   const response = await axiosInstance.get("/users");
    console.log(response.data);
    setUsersData(response.data);
    setIsLoading(false);
  }
   
  useEffect(() => {
    getUsersData();
  }, [])
  if (isLoading) {
      return <div>Loading...</div>;
    }
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