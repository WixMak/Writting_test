import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Welcome from'./Welcome'
import Login from'./Login'
import './Welcome/welcome.css'


export default function route(){

    return(

        <Router>

            <div>

            <nav>

                        <Link to = "/welcome">Welcome</Link>  
                        <Link to = "/login">Login</Link>         

                
            </nav>

          
               
        <Switch>

            <Route path="/welcome" ><Welcome/></Route>

            <Route path="/login" ><Login/></Route>

        </Switch>

            </div>

        </Router>
    )
    
}