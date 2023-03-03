import React from 'react'
import {NavLink} from 'react-router-dom';
import './Login.css'

function Login() {
  return (
	<>
	
	
	<div class="page-login d-flex align-items-center justify-content-center">
	<div class="card" >
		<div class="card-body ">
		<div className="row m-5">
		<span className=''>Login</span> <br/>
		<span className='dropship-ai'> DropShip.Ai</span> 
		</div>
		<form className="m-3">
		<div class="mb-3">
			<label for="exampleInputEmail1" class="form-label">Email address</label>
			<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email Address'/>
			<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
		</div>
		<div class="mb-3">
			<label for="exampleInputPassword1" class="form-label">Password</label>
			<input type="password" class="form-control" id="exampleInputPassword1" placeholder='Enter Password'/>
		</div>
		<div className="m-3 btn-div">
		<NavLink  to="/" className="btn-login">
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