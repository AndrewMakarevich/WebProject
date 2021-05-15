import React, { useEffect, useState } from 'react';
import './Registration.css';
import './fieldAnimation.js';
import {useHttp} from '../../hooks/http.hook';
import {useMessage} from '../../hooks/message.hook.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import logo from "../../Images/ATHRA.png";

function Registration() {
    const message = useMessage();
    const {loading, error, request, clearError} = useHttp();
    const [form, setForm] = useState({
       firstName: '',
       secondName: '',
       email: '',
       nickName: '',
       password: ''
    });

    // useEffect(()=>{
    //       message(error);         
    // });

    const changeHandler = event => {
       setForm({...form, [event.target.name]: event.target.value});
    };

    const registerHandler = async () => {
        try{
            const data = await request('/api/auth/register', 'POST', {...form}, 'You successfully registered');
            console.log(`Data: ${data}`);
        }catch(e){
        }
    };
    return (
            <div className ="regWindow">
               <div className="header"> REGISTRATION</div> 
                 <div className="inputFields">
                    <div className="data1">
                       <label for="firstName" className="regLabel">First name</label><input className="regInput" name="firstName" type="text" required onChange={changeHandler}/>
                    </div>
                    <div className="data2">
                        <label for="secondName" className="regLabel">Second name</label><input className="regInput" name="secondName" type="text" required onChange={changeHandler}/>
                    </div>    
                    <div className="data3">
                        <label for="email" className="regLabel">Email</label><input className="regInput" name="email" type="mail" required onChange={changeHandler}/>
                    </div>  
                    <div className="data4">
                        <label for="nickname" className="regLabel">Nickname</label><input className="regInput" name="nickName" type="text" required onChange={changeHandler}/>
                    </div>  
                    <div className="data5">
                        <label for="password" className="regLabel">Password</label><input className="regInput" name="password" type="password" required onChange={changeHandler}/>
                    </div>    
                    {/* <div className="data6">
                        <label for="password2" className="regLabel">Repeat password</label><input className="regInput" name="password2" type="password" required/>
                    </div>     */}
                    <div>
                         <input className="submitButton" type="submit" value="Зарегистрироваться" onClick={registerHandler}/>
                    </div>
                    <div className="SignInQuestion" >Already have an account?<Link to="/signin">Sign in.</Link></div> 
                </div>
               <script src="./fieldAnimation.js"></script>     
            </div>
            
    );
    
}
export default Registration;