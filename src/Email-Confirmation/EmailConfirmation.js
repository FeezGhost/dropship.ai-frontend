import React,{useEffect} from 'react'
import { useLocation } from "react-router-dom";
import queryString from 'query-string'
import axios from 'axios'


function EmailConfirmation() {
  // let [searchParams, setSearchParams] = useSearchParams()
  const {search}=useLocation()
  const {uuid,token}=queryString.parse(search)

  useEffect(()=>{
    emailSuccess()
  })
  

  const emailSuccess = async () => {
    const requestOptions = {
      headers: { 'Content-Type': 'application/json',},
      uid:uuid,
      token:token
    }
    try{
			let resp=await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/activation/`,requestOptions)
      if (resp.status == 204) {
      }
		}
		catch(err){
			console.error(err)
		}
    // fetch(
    //   `${process.env.REACT_APP_API_URL}/auth/users/activation/`,
    //   requestOptions
    // ).then(async (response) => {
    //   if (response.status != 200) {
    //   } 
    // })
  }

  return (
    <div className="page-login d-flex align-items-center justify-content-center">
    <div className="card" >
      <div className="card-body ">
      <div className="row m-5">
      <span>Congratulations !Your email has been confirmed</span>
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

export default EmailConfirmation