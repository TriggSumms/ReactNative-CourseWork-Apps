import React, { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';


//Utilizing this screen to run our token checking action

const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  //shows nothing
  return null;
};

export default ResolveAuthScreen;