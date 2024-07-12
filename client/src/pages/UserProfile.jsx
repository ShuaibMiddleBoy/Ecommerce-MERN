import React, { useEffect, useState } from 'react'
import axios from 'axios';

const UserProfile = () => {
    const [userData, setUserData] = useState({});

    useEffect(()=>{
        const fetchUserData = async () => {
            try {
                const res = await axios.get('http://localhost:8000/auth/login/success', {
                    withCredentials: true // If your API requires credentials (like cookies)
                });
                setUserData(res.data.user)
            } catch (error) {
                console.log("Error fetching user data:", error);
            }
        }
        fetchUserData()
    },[])
  return (
   <div className="container flex gap-2 m-auto my-5 w-9/12">
  <div className='w-3/10 bg-white rounded-sm'>
  <div className="user-profile flex flex-col justify-center items-center my-5">
				<div class="user-avatar ">
                    {userData.image ? <img srcSet={userData.image} alt={userData.displayName} className=" w-32 border  rounded-full " /> : <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin" className=" w-32 border  rounded-full " />}
				</div>
				<h5 class="user-name">{userData.displayName}</h5>
                <h6 class="user-email">{userData.email}</h6>
			</div>
  </div>
  <div className='w-7/10 bg-white p-5 rounded-sm'>
  <h2>User Details</h2>

  <form className='grid grid-cols-2 gap-5 mt-3'>
    <div className='flex flex-col'>
    <label htmlFor="userName">User Name</label>
    <input type="text" value={userData.displayName} className='border' />
    </div>
    <div className='flex flex-col'>
    <label htmlFor="userEmail">User Email</label>
    <input type="email" value={userData.email} className='border' />
    </div>
    <div className='flex flex-col'>
    <label htmlFor="userPassword">User Passowrd</label>
    <input type="password" value={'shuaibkhan@0101'} className='border' />
    </div>
  </form>
  </div>
</div>

  )
}

export default UserProfile