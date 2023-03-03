import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import {Switch,Route} from 'react-router-dom'
import Home from './Home/Home';
import Recover from './Recover-pass/Recover-password';
import About from './About/About';
import Navbar from './Navbar/Navbar';
import Signup from './Sign-up/Signup';
import Login from './Login/Login';

function App() {
  return (
    <div>
       
      <Navbar/>
      <Switch>
        <Route exact path='/'><Home/></Route> 
        <Route exact path='/about'><About/></Route> 
        <Route exact path='/signup'><Signup/></Route>
       
      </Switch>
      <Route exact path='/login'><Login/></Route>
      <Route exact path='/recover'><Recover/></Route>
    </div>
  );
}

export default App;
