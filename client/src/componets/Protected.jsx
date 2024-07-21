import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom';


const Protected = ({component:Component}) => {
  const navigate = useNavigate();
    useEffect(()=>{
        const userData = JSON.parse(localStorage.getItem("user"));
if(!userData || userData.role !== 1){
    return navigate("/")
}
    },[])
  return (
    <Component/>
  )
}

export default Protected