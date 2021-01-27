import React, { useReducer } from 'react';



//Helper function created for blog context, pretty much duplicate code for automation of the add blogposts 
//Note: *.need to add keywords to vocab list... context and RN is very specific with convention

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // actions === { addBlogPost: (dispatch) => { return () => {} } }

    //actions being looped through, for every blogpost(*key) called with deispatch, we return the entire spread object via context exported
    //*Nasty  

    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };


  return { Context, Provider };
};
