import React from 'react'
import {NavLink} from 'react-router-dom';
import './Recover-pass.css'

function Recover() {
  return (
	<>
	<div class="page-login d-flex align-items-center justify-content-center">
	<div class="card" >
		<div class="card-body ">
		<div className="row m-5">
		<span className=''>Recover</span> <br/>
		<span className='dropship-ai'> Password</span> 
		</div>
		<form className="m-3">
		<div class="mb-3">
			<label for="exampleInputEmail1" class="form-label">Email address</label>
			<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email Address'/>
			<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
		</div>
		<div className="m-3 btn-div">
		<NavLink  to="/" className="btn-login">
			Send Email
		</NavLink>
{/* 		
		<p>If you forgot you password click <NavLink to="/password-reset" > here</NavLink>
		</p> */}
		</div>
		</form>
		</div>
		</div>
	</div>
	</>
  )
}

export default Recover