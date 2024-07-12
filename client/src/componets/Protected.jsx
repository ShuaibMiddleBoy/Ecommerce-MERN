import React, { useEffect } from 'react'
import { Navigate} from 'react-router-dom';


const Protected = ({component:Component}) => {
    useEffect(()=>{
        const userData = JSON.parse(localStorage.getItem("user"));
if(!userData || userData.role !== 1){
    return <Navigate to="/" />;
}
    },[])
  return (
    <Component/>
  )
}

export default Protected