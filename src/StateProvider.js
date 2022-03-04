import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(); //where the data layer lives

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
); //this is data layer... the stateprovider is the data layer

export const useStateValue = () => useContext(StateContext);
