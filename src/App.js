import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import {Route,Routes} from 'react-router-dom';
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
import CheckoutSuccess from './Checkout/CheckoutSuccess';
import CheckoutCancel from './Checkout/CheckoutCancel';
import { REACT_APP_STRIPE_KEY } from './Config/Config'

const stripe_key = REACT_APP_STRIPE_KEY
const stripePromise = loadStripe(stripe_key)

function App() {
  return (
      <>
      <Navbar/>
      <Elements stripe={stripePromise} >
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/login'element={<Login/>} />
        <Route exact path='/signup' element={<Signup/>}/> 
        <Route exact path='/recover'element={<Recover/>} />
        <Route exact path="/generate-product" element={<GenerateResults/>} />
        <Route exact path="/resend-email" element={<ResendEmail/>} />
        <Route exact path="/email-confirmation" element={<EmailConfirmation/>} />
        <RouteGuard  exact path="/shop"  element={<Checkout/>}/>
        {/* <Route exact path="/shop" element={<Checkout/>} /> */}
        <Route exact path='/checkout/success/' element={<CheckoutSuccess/>} />
        <Route exact path='/checkout/failed/' element={<CheckoutCancel/>} />
      </Routes>
      </Elements>
      </>
  );
}

export default App;
