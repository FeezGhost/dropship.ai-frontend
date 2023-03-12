import React,{useState} from 'react'
import {NavLink} from 'react-router-dom';
import './Recover-pass.css'



// https://dropship-io.herokuapp.com/auth/users/reset_password/
function Recover() {
	const [email,setEmail]=useState(null)


	const handleInputChange = async (e) => {
        const {id , value} = e.target;
        if(id === "email"){
            setEmail(value);
        }
    }

	const resetPassword=()=>{
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email:email,
				})
		};
		fetch('https://dropship-io.herokuapp.com/auth/users/reset_password/', requestOptions)
			.then(response => {
				if(response.status!=200){
				}
				else{
				}
			})
	}

  return (
	<>
	<div className="page-login d-flex align-items-center justify-content-center">
	<div className="card" >
		<div className="card-body ">
		<div className="row m-5">
		<span className=''>Recover</span> <br/>
		<span className='dropship-ai'> Password</span> 
		</div>
		<form className="m-3">
		<div className="mb-3">
			<label for="email" className="form-label">Email address</label>
			<input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email}
			onChange = {(e) => handleInputChange(e)} placeholder='Enter Your Email Address'/>
		</div>
		<div className="m-3 btn-div">
		<NavLink onClick={resetPassword} to="/" className="btn-login">
			Send Email
		</NavLink>
		</div>
		</form>
		</div>
		</div>
	</div>
	</>
  )
}

export default Recover