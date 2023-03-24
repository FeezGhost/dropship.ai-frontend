import React,{useEffect,useRef} from 'react';
import { API_URL } from '../Config/Config';
import './Checkout.css'

const Checkout = () => {
	const formRef = useRef(null);
	useEffect(() => {
		formRef.current.submit();
	  }, []);
    return (
        <>
            <div className="container">
                <form ref={formRef}
				action={`${API_URL}/payment/checkout/create-checkout-session/15/`} method="GET">
                    <button  className="btn-checkout" type="submit" >Checkout</button>
                </form>
            </div>
        </>
    );
}

export default Checkout;
