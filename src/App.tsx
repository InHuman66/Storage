import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import classes from "./app.module.css";
import Login from "./main/app/ui/Login/login";
import Home from "./main/app/ui/Home/Home";

function App() {
  return (
    <div className={classes.back}>
        <Route  path={'/login'} render={()=> <Login/>}/>
        <Home/>
    </div>
  );
}

export default App;
