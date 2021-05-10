import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import About from './pages/AboutPage/About.js';
import Home from './pages/HomePage/Home.js';
import Articles from './pages/ArticlesPage/Articles.js';
import Registration from './pages/RegistrationPage/Registration.js';
import PersonalCabinet from './pages/PersonalCabinet/personalCabinet.js';
import SignIn from './pages/SignInPage/SignIn.js';


export const useRoutes = isAuthenticated =>{
    if(isAuthenticated){
        return(
            <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/articles">
            <Articles />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/signin">
            <SignIn/>
          </Route>
          <Route path="/personalcabinet">
            <PersonalCabinet />
          </Route>
          <Route path="/">
            <Home />
          </Route> 
          <Redirect to="/personalcabinet"/>
        </Switch>
        )    
    }

    return(
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/articles">
            <Articles />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/signin">
            <SignIn/>
          </Route>
          <Route path="/">
            <Home />
          </Route> 
          <Redirect to="/"/>
        </Switch>
    )
}