import React, {useState, useContext, useEffect} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import standartUserPicture from './Images/userPicture .jpg';

import {useRoutes} from './routes.js';
import { styled } from '@material-ui/core/styles';
import './adaptiveMenuScript.js';
import './userNickNameAnimation';
import Arfa from './Images/arfa.png';

import {useAuth, useUserData} from './hooks/auth.hook';
import {AuthContext,  ClientDataContext} from './context/AuthContext';


const MyLink = styled(Link)({
  textDecoration: "none",
  color: "white"
});
const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #6A5ACD 30%, #4169E1 90%)',
  marginLeft: "5px",
  marginTop: "5px",
  fontSize: "0.5vw"
});




function App() {
  const[userData, setUserData] = useState({
    icon: standartUserPicture,
    nickname: "GuestUser",
  });

  

  const {token, login, logout, userId} = useAuth();
  const {setPersonalData, logoutData, nickName, firstName} = useUserData();


  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  console.log(isAuthenticated);
  console.log(nickName);

  
    return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <ClientDataContext.Provider value={{
        setPersonalData, nickName, firstName, logoutData
      }}>
      <Router>
  <div className="App">

<div className="logoText"> ATHRA</div> 
<img className ="logoPicture" src={Arfa}></img>
  <div className="AppBar">
    
    <div className="mobileMenuVersion">
       <span className="firstSpan"></span>
       <span className="secondSpan"></span>
       <span className="thirdSpan"></span>
    </div>
    
    <div className="sectionsMenu">
     <button color="primary"><MyLink to="/">Home</MyLink></button>
     <button color="primary"><MyLink to="/about">About us</MyLink></button>
     <button color="primary"><MyLink  to="/articles">Articles</MyLink></button>
     <button color="primary"><MyLink  to="/registration">Registration</MyLink></button>
     <button color="primary"><MyLink  to="/signin">Sign In</MyLink></button>
    </div> 
      <div className="navigationUserBlock">
          
      <MyLink  to="/personalcabinet"><img className="userPicture" src={userData.icon} ></img></MyLink>
          <div className="userNickName" >{nickName}</div>
      </div> 
  </div>    



<div className="routPage">
  {routes}
</div>
        
    </div>
<footer className="Footer">
  <div className="footerText"> 
        <div className="text1"><a  href="#">TERMS & CONDITIONS</a></div>
        <span></span>
				<div className="text2"><a  href="#">PRIVACY POLICY</a></div>
        <span></span>
				<div className="text3"><a  href="#">RIGHT TO CANCEL</a></div>
  </div>
</footer>

</Router>      
    </ClientDataContext.Provider>
    </AuthContext.Provider>
  );

  
}

  
export default App;
