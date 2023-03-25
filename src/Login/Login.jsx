import React,{useState} from 'react'
import {NavLink} from 'react-router-dom';
// import Toast from '../Toast/Toast';
import './Login.css'
import axios from 'axios';

function Login() {

	const [email,setEmail]=useState(null);
	const [password,setPassword]=useState(null);
	const [validatepass,setValidatePass]=useState(false)
	const [validateEmail,setValidateemail]=useState(false)
	const [unauthPassword,setunauthPassword]=useState(null)
	const [toastContent,setToastContent]=useState({
		text:'',
		color:''
	})
	const [loginerr,setloginerr]=useState(null);
	const [showloginerr,setshowloginerr]=useState(false)



	const handleInputChange = async (e) => {
        const {id , value} = e.target;
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
    }
	const hasSubscription=async ()=>{
		try{
		  const requestOptions = {
			headers: { 
			  'Content-Type': 'application/json',
			  'Authorization': `Bearer ${localStorage.getItem('token')}`
		  },
		  }
		  let resp=await axios.get(`${process.env.REACT_APP_API_URL}/payment/subscription/verify/`,requestOptions)
		  if(resp.status==200){
			localStorage.setItem('isSubscribed',resp.data.isSubscribed)
		  }
		}
		catch(err){
		}
	  }

	const Login=async ()=>{
		
		if(email=='' || email==null){
			setValidateemail(true)
			return
		}
		else if (email !='' && email !=null)
		{
			setValidateemail(false)
		}
		if(password=='' || password==null){
			setValidatePass(true)
			return
		}
		else if (password !='' && password !=null)
		{
			setValidatePass(false)
		}
		const requestOptions = {
			headers: { 'Content-Type': 'application/json' },
			username:email,
				password,
		};

		try{
			let resp=await axios.post('https://dropship-io.herokuapp.com/auth/jwt/create',requestOptions)
			if(resp.status==200){
				
				setloginerr('')
					setshowloginerr(false)
					const token  =  resp.data.access;
					await localStorage.setItem("token",token);
					localStorage.setItem("refresh",resp.data.refresh);
					hasSubscription();
					// window.location.href = '/'
			}
			else if(resp.status==401)
			{
				setunauthPassword('No active account found with the given credentials')
			}
			else{
				setloginerr()
				setshowloginerr(true)
			}

		}
		catch(err){
			console.error(err)
		}
}


  return (
	<>
	
	<div className="page-login d-flex align-items-center justify-content-center ">
	<div className="card" >
		<div className="card-body login-body">
		<div className="row m-5">
		<span className=''>Login</span> <br/>
		<span className='dropship-ai'> DropShip.Ai</span> 
		</div>
		<form className="m-3">
		<div className="mb-3">
			<label for="email" className="form-label">Username</label>
			<input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email}
			onChange = {(e) => handleInputChange(e)}  placeholder='Enter Your Email Address'/>
			{validateEmail && <div className="text-danger">Email is required</div>}
		</div>
		<div className="mb-3">
			<label for="password" className="form-label">Password</label>
			<input type="password" className="form-control" id="password" placeholder='Enter Password' value={password}
			onChange = {(e) => handleInputChange(e)}/>
			{validatepass && <div className="text-danger">Password required</div>}
		</div>
		{showloginerr && <div className="text-danger">{loginerr}</div>}
		{unauthPassword !=null && <div className="text-danger">{unauthPassword}</div>}
		<div className="m-3 btn-div">
		<NavLink  onClick={Login} to="/login" className="btn-login">
			Login
		</NavLink>
		<p>If you forgot you password click <NavLink to="/recover" > here</NavLink>
		</p>
		</div>
		</form>
		</div>
		</div>
	</div>
	</>
  )
}

export default Login