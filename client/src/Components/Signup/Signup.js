
import  { useState,} from 'react';
import  { useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { loginUser, registerUser } from '../../js/actions/user';

import "./Signup.css";


function Signup() {

 const [name, setname] = useState("");
 const [lastname, setlastname] = useState("");
 const [email, setemail] = useState("");
 const [password, setpassword] = useState("");
 const dispatch =useDispatch();
 const navigate=useNavigate();

		return (
			<div>
			  <title>Slide Navbar</title>
			  <link rel="stylesheet" type="text/css" href="slide navbar style.css" />
			  <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet" />
			  <div className="main">  	
				<input type="checkbox" id="chk" aria-hidden="true" />
				<div className="signup">
				  <form >
					<label htmlFor="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="User name" required onChange={(e)=> setname(e.target.value)} />
					<input type="text" name="txt" placeholder="User Lastname" required onChange={(e)=> setlastname(e.target.value)} />
					<input type="email" name="email" placeholder="Email" required onChange={(e)=> setemail(e.target.value)}/>
					<input type="password" name="pswd" placeholder="Password" required onChange={(e)=> setpassword(e.target.value)}/>
					<button onClick={(e)=>{
						e.preventDefault();
						 dispatch(registerUser({name,lastname,email,password},navigate));
					}}>Sign up</button>
				  </form>
				</div>
				<div className="login">
				  <form >
					<label htmlFor="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required onChange={(e)=> setemail(e.target.value)}/>
					<input type="password" name="pswd" placeholder="Password" required onChange={(e)=> setpassword(e.target.value)}/>
					<button onClick={(e)=> {
						e.preventDefault()
						dispatch(loginUser({email,password},navigate))
					}}>Login</button>
				  </form>
				</div>
			  </div>
			</div>
		  );
		}


export default Signup;