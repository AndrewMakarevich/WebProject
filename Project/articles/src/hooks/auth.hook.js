import {useState, useCallback, useEffect} from 'react';

const storageName = 'userData';
const storageName2 = 'personalUserData';
export const useAuth =()=>{
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);

    const login = useCallback((jwtToken,id)=>{
        setToken(jwtToken);
        setUserId(id);

        localStorage.setItem(storageName, JSON.stringify({
            userId: id, token: jwtToken
        }));
    },[]);

    const logout = useCallback(()=>{
        setToken(null);
        setUserId(null);
        localStorage.removeItem(storageName);
    },[]);

   useEffect(()=>{
       const data = JSON.parse(localStorage.getItem(storageName));

       if(data && data.token){
           login(data.token, data.userId);
       }
   }, [login]);

   return { login, logout, token, userId};
};

export const useUserData = () =>{
    const [nickName, setNickname] = useState('GuestUser');
    const [firstName, setFirstname] = useState('Guest');

    const setPersonalData = useCallback((nick, firstN)=>{
         setNickname(nick);
         setFirstname(firstN);

         localStorage.setItem(storageName2, JSON.stringify({
            nickName: nick, firstName: firstN
        }));
    });
    const logoutData = useCallback(()=>{
        setNickname('GuestUser');
         setFirstname('User');
        localStorage.removeItem(storageName2);
    },[]);
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem(storageName2));
        if(data){
            setPersonalData(data.nickName, data.firstName);
        }
    },[setPersonalData]);
    return{ setPersonalData,logoutData, nickName, firstName}
};