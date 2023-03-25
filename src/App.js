import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { useEffect } from 'react';
import {Route,Switch} from 'react-router-dom';
import axios from 'axios'
import { history } from './helper/history';
import RouteGuard from './RouteGuard/RouteGuard';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from "@stripe/stripe-js/pure"
import Home from './Home/Home';
import Recover from './Recover-pass/Recover-password';
import About from './About/About';
import Navbar from './Navbar/Navbar';
import Signup from './Sign-up/Signup';
import Login from './Login/Login';
import GenerateResults from './GenerateResults/GenerateResults';
import EmailConfirmation from './Email-Confirmation/EmailConfirmation';
import ResendEmail from './ResendEmail/ResendEmail';
import Subscription from './Subscription/Subscription';
import Checkout from './Checkout/Checkout';
import ResetPassword from './Recover-pass/Reset-Password';
import CheckoutSuccess from './Checkout/CheckoutSuccess';
import CheckoutCancel from './Checkout/CheckoutCancel';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { REACT_APP_STRIPE_KEY } from './Config/Config'

const stripe_key = REACT_APP_STRIPE_KEY
const stripePromise = loadStripe(stripe_key)

function App() {
  useEffect(()=>{
    setTimeout(async () => {
      try{
        debugger
        if(localStorage.getItem("refresh") !=undefined){
          const requestOptions = {
            headers: { 'Content-Type': 'application/json',
          },
            refresh:localStorage.getItem("refresh")
          }
          let resp=await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/refresh/`,requestOptions)
          if (resp.status == 200) {
            localStorage.removeItem('token')
            localStorage.setItem("token",resp.data.access)
          }
        }
      }
      catch(err){
        console.error(err)
      }
    }, 300000);

  })




  return (
      <>
      <Navbar/>
      <Elements stripe={stripePromise} >
      <ReactNotifications />
      <Switch>
        <Route exact path='/'><Home/></Route> 
        <Route exact path='/about'><About/></Route>
        <Route exact path='/login'><Login/></Route> 
        <Route exact path='/signup'><Signup/></Route> 
        <Route exact path='/recover'><Recover/></Route> 
        <Route exact path="/generate-product"><GenerateResults/></Route> 
        <Route exact path="/resend-email"><ResendEmail/></Route> 
        <Route exact path="/email-confirmation"><EmailConfirmation/></Route> 
        <RouteGuard  exact path="/shop" component={Checkout} />
        <Route exact path='/checkout/success/'><CheckoutSuccess/></Route>
        <Route exact path='/checkout/failed/'><CheckoutCancel/></Route> 
        <Route exact path='/password-reset'><ResetPassword/></Route> 
      </Switch>
      </Elements>
      </>
  );
}

export default App;
