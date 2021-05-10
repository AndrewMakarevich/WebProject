import React, {useState, useEffect, useContext} from 'react';
import {AuthContext,  ClientDataContext} from '../../context/AuthContext'; 
import './personalCabinet.css';

function PersonalCabinet(){
    const auth = useContext(AuthContext);
    const userData = useContext(ClientDataContext);

    const logoutHandler = async() => {
        try{
            auth.logout();
            userData.logoutData();
        }catch(e){
            console.log(e.message);
        }
    
         
    };
    return(
        <div>
            <h1>Id: {auth.userId}</h1>
            <h2>Nickname: {userData.nickName}</h2>
            <h3>FirstName: {userData.firstName}</h3>
            <button onClick={logoutHandler}>LogOut</button>
        </div>
    )
};
export default PersonalCabinet;