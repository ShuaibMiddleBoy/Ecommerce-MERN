import React, { useEffect, useState } from 'react'
import Header from './Header';
import Table from './Table';
import axiosInstance from '../../api/api';


  const columns = [
    {Header : "ID", accessor:"id"},
    {Header: "User Name", accessor:"displayName"},
    {Header:"User Email", accessor : "email"},
    {Header : "Role", accessor:"roleName"}
  ]

const Users = () => {
const [myUsers, setMyUsers] = useState([]);

    useEffect(()=>{
        const  fetchUsers = async () => {
          try {
            const res = await axiosInstance.get('/auth/users');
            const data = res.data;
            const dataWithID = data.map((item, index)=>(
              {  ...item,
                id : index + 1,
                roleName : item.role == 1 ? "Admin" : "User"
            }
            ))
           setMyUsers(dataWithID );
          } catch (error) {
            console.log('Error in Users fetching ',error);
          }
        }

        fetchUsers();
    },[])



  return (
    <div className='user_data'>
        <h4>Users Data</h4>
   <Table columns={columns} data={myUsers} />
   </div>
  )
}

export default Users