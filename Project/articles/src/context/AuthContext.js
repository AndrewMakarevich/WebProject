import {createContext} from 'react';

function noop(){}

export const AuthContext = createContext({
     token:null,
     userId: null,
     login: noop,
     logout: noop,
     isAuthenticated: false
});

export const ClientDataContext = createContext({
     nickName: 'GuestUser',
     firstName:"Guest",
     setPersonalData: noop
});