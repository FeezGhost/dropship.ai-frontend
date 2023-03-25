import React,{useEffect} from 'react'
// import { useSearchParams } from "react-router-dom";

function CheckoutSuccess() {

  useEffect(()=>{
    emailSuccess()
  })

  const emailSuccess = () => {
    // const params=new useSearchParams(window.location.pathname)
    debugger

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
      }),
    }
    fetch(
      `${process.env.REACT_APP_API_URL}/auth/users/resend_activation/`,
      requestOptions
    ).then(async (response) => {
      if (response.status != 200) {
      } 
    })
  }

  return (
	<div className="page-login d-flex align-items-center justify-content-center">
    <div className="card" >
      <div className="card-body ">
      <div className="row m-5">
      <span>Congratulations you have successfully subscribed!</span>
      </div>
      <form className="m-3">
      <div className="m-3 btn-div">
      </div>
      </form>
      </div>
      </div>
    </div>
  )
}

export default CheckoutSuccess