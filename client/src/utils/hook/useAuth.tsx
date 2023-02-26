import React, {createContext, useContext, useState} from 'react';
import {USER_TYPE_ENUM} from '../constants/constain';

interface IAuthenticator {
  email: string;
  accessToken: string;
  type: USER_TYPE_ENUM;
}

interface IAuthContext {
  user?: IAuthenticator;
  signIn: (
    email: string,
    password: string,
    callback: (response: USER_TYPE_ENUM) => void,
  ) => void;
  signOut: (callback: () => void) => void;
}

const authContext = createContext<IAuthContext>({
  user: undefined,
  signIn: () => {},
  signOut: () => {},
});

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({children} : any) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

function fakeAuthen() {
  const signInWithEmailAndPassword = (email: string, password: string) => {
    return new Promise<USER_TYPE_ENUM>((res, rej) => {
      if (!email || !password) {
        rej('Empty Authenticator');
      } else {
        let userType = USER_TYPE_ENUM.otp;
        switch (email.toLowerCase()) {
          case 'employee':
            userType = USER_TYPE_ENUM.employee;
            break;
          case 'broker':
            userType = USER_TYPE_ENUM.broker;
            break;
          default:
            userType = USER_TYPE_ENUM.otp;
            break;
        }

        res(userType);
      }
    });
  };

  const signOut = () => {
    return new Promise(res => {
      res('OK');
    });
  };

  return {
    signInWithEmailAndPassword,
    signOut,
  };
}

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState<IAuthenticator>();
  const authen = fakeAuthen();

  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signIn = async (
    email: string,
    password: string,
    callback: (response: USER_TYPE_ENUM) => void = () => {},
  ) => {
    authen
      .signInWithEmailAndPassword(email.trim(), password.trim())
      .then(response => {
        setUser({
          email: email.trim(),
          accessToken: '123456789',
          type: response,
        });
        callback(response);
      })
      .catch(err => {
        console.error('error:', err);
      });
  };

  const signOut = async (callback: () => void = () => {}) => {
    await authen.signOut();
    setUser(undefined);
    callback();
  };

  // Return the user object and auth methods
  return {
    user,
    signIn,
    signOut,
  };
}
