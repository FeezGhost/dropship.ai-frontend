import React,{useEffect,useRef,useState} from 'react';
import { API_URL } from '../Config/Config';
import jwt_decode from "jwt-decode";
import './Checkout.css'

const Checkout = () => {
    const [id,setId]=useState('');

	const formRef = useRef(null);
	useEffect(() => {
        decodeToken();
        setTimeout(() => {
            formRef.current.submit();
        }, 100);
	  }, []);


      const decodeToken=()=>{
        var decoded = jwt_decode(localStorage.getItem("token"));
        setId(decoded.user_id)
      }
  
    return (
        <>
            <div className="container">
                <form ref={formRef}
				action={`${API_URL}/payment/checkout/create-checkout-session/${id}/`} method="GET">
                    <button  className="btn-checkout" type="submit" >Checkout</button>
                </form>
            </div>
        </>
    );
}

export default Checkout;
