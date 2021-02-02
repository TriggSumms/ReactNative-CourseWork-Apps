import React, { useReducer } from 'react';

//Lil helper function for creating the context...so we can set up the actions

export default (reducer, actions, defaultValue) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
      //state and dispatcher(action)
    const [state, dispatch] = useReducer(reducer, defaultValue);

    const boundActions = {};
    //iterate all the functions and call with the dispatch
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context: Context, Provider: Provider };
  //Context helps us gain access through the child elements and Provider is the component and helps the info/context be accesible
  
};