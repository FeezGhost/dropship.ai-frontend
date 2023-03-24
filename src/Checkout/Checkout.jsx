import React,{useEffect} from 'react';

const Checkout = () => {
	useEffect(()=>{
		getSesstion()
	})

	const getSesstion=()=>{
		const requestOptions = {
			method: 'GET',
			headers: { 'Content-Type': 'application/json',mode: 'no-cors' },
		  }
		  fetch(`${process.env.REACT_APP_API_URL}/payment/checkout/create-checkout-session?userid=1`, requestOptions)
			.then((resp) => {
			  if (resp.status == 200) {
				debugger
			  }
			})
			.catch((err) => {
			  debugger
			})
	}

    return (
		<></>
        // <>
        //     <div className="container">
        //         <h1>Checkout</h1>
        //         <h2>Price</h2>
        //         <h3>25$</h3>
        //         <form action={`${process.env.REACT_APP_API_URL}/checkout/create-checkout-session/`} method="POST">
        //         <input type="hidden" name="product_name" value="test_product" />
        //         <input type="hidden" name="price" value={25 * 100} />
        //             <button className="btn-checkout" type="submit" >Checkout</button>
        //         </form>
        //     </div>
        // </>
    )
}

export default Checkout;