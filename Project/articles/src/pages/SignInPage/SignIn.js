import React, {useState, useEffect, useContext} from 'react';
import './SignIn.css';
import './fieldAnimationSignIn.js';
import {useHttp} from '../../hooks/http.hook.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import {AuthContext,  ClientDataContext} from '../../context/AuthContext'; 

function SignIn() {
     const {loading, error, request, errorMessage} = useHttp();
     const[form, setForm] = useState(
         {
             email: '',
             password:''
         }
     );
     const auth = useContext(AuthContext);
     const userData = useContext(ClientDataContext);

     const changeHandler =(event) =>{
          setForm({...form, [event.target.name]: event.target.value});
     };
     const loginHandler = async() => {
         try{
             const data = await request('/api/auth/login', 'POST', {...form}, 'You successfully logged');
             console.log(data.User);
             auth.login(data.token, data.userId);
             userData.setPersonalData(data.User.nickName, data.User.firstName);
         }catch(e){
             console.log(e.message);
         }
          
     };
    return (
        <div className ="SignInWindow">
               <div className="headerSecond">SIGN IN</div> 
                 <div className="inputFields">  
                    <div className="data1Confirmation">
                        <label className="signInLabel" for="email">Email</label><input className="signInInput" name="email" type="mail" required onChange={changeHandler}/>
                    </div>  
                    <div className="data2Confirmation"Confirmation>
                        <label className="signInLabel" for="password">Password</label><input className="signInInput" name="password" type="password" required onChange={changeHandler}/>
                        <div className="Error"></div>
                    </div>     
                    <div >
                         <input className="submitButtonSecond" type="submit" value="Войти" onClick={loginHandler}/>
                    </div>
                    <div className="registerQuestion" >Have no account?<Link to="/registration">Register.</Link></div> 
                </div>
                <script src="./fieldAnimationSignIn.js"></script> 
                  
            </div>
    );
}
export default SignIn;