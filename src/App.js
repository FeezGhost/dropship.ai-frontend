import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import {Switch,Route,BrowserRouter,Routes,Redirect} from 'react-router-dom';
import { history } from './helper/history';
import RouteGuard from './RouteGuard/RouteGuard';
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

function App() {
  return (
      <>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about'><About/></Route>
        <Route exact path='/login'><Login/></Route> 
        <Route exact path='/signup'><Signup/></Route> 
        <Route exact path='/recover'><Recover/></Route>
        <Route exact path="/generate-product"><GenerateResults/></Route>
        <Route exact path="/resend-email"><ResendEmail/></Route>
        <Route exact path="/email-confirmation"><EmailConfirmation/></Route>
        <Route exact path="/shop"><Checkout/></Route>
      </Switch>
      </>
  );
}

export default App;
