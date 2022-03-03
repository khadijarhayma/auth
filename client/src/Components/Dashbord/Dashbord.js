import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../../js/actions/user';
import { useNavigate } from 'react-router-dom';
const Dashbord = () => {
  const dispatch =useDispatch();
  const navigate = useNavigate();
  return (
    <div>
    <h1 style={{color:"white"}}>  Dashboard  </h1>   
        <button onClick={()=>{dispatch(logout)
        navigate("/")
        }}>logout</button>
    </div>
  )
}

export default Dashbord