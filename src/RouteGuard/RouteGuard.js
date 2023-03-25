import React from 'react';
import { Route, Redirect } from 'react-router-dom';
 
const RouteGuard = ({ component: Component, ...rest }) => {
 
   function hasJWT() {
    debugger
       let flag = false;
 
       //check user has JWT token
       localStorage.getItem("token") ? flag=true : flag=false
        debugger
       return flag
   }
 
   return (
       <Route {...rest}
           render={props => (
               hasJWT() ?
                   <Component {...props} />
                   :
                   <Redirect to='/login' />
           )}
       />
   );
};
 
export default RouteGuard;