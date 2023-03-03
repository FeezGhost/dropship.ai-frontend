import React,{useState} from 'react'
import {NavLink} from 'react-router-dom';
import 'axios';
import signup from '../assets/signup.png'
import './Signup.css'
import axios from 'axios';

function Signup() {
	const [userName,setUserName]=useState('')
	const [email,setEmail]=useState('')
	const [password,setPassword]=useState('')

	const createUser=async ()=>{

			const data= {
				username:'hamzakhan',
			email:'hamzakhanhere51@gmail.com',
			password:"1234thisthis"
		}
	  let resp=await axios.post('https://dropship-io.herokuapp.com/auth/users',data,{
	  headers: {
		'Content-Type': 'application/json'
	}})
	}


  return (
	<div>
		<section id="header" className="d-flex align-items-center mt-5">
		 <div className="container-fluid nav_bg"> 
			<div className="row">
				<div className="col-10 mx-auto">
					<div className='row'>
					<div className='col-md-7 ml-5 pt-5 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-column signup-form'>
						<h1> 
							<span className=''> SIGN UP! to gain access to</span> <br/>
							<span className='dropship-ai'> DropShip.Ai</span> 
						</h1>
						<form className="mt-5">
							<div class="mb-3">
								<label for="exampleInputEmail1" class="form-label">User Name</label>
								<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter User Name'/>
								<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
							</div>
							<div class="mb-3">
								<label for="exampleInputEmail1" class="form-label">Email address</label>
								<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email Address'/>
								<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
							</div>
							<div class="mb-3">
								<label for="exampleInputPassword1" class="form-label">Password</label>
								<input type="password" class="form-control" id="exampleInputPassword1" placeholder='Enter Password'/>
							</div>
							<div class="mb-3">
								<label for="exampleInputPassword1" class="form-label">Confirm Password</label>
								<input type="password" class="form-control" id="exampleInputPassword1" placeholder='Confirm Password'/>
							</div>
							</form>
						<div className="mt-3">
							<NavLink  onClick={createUser} to="/" className="btn-signup">
								Sign Up
							</NavLink>
						</div>
						<div className="mt-3">
						if you already have an account click <NavLink to="/login"> here</NavLink> to login
						</div>
					</div>
					<div className='col-lg-5 order-1 order-lg-1 header-img d-flex justify-content-center flex-column'>
						<img src={signup} alt="socials" className='img-fluid animated'/>
					</div>
				</div>
				</div>
			</div>
		</div>
		</section>
	</div>
  )
}

export default Signup