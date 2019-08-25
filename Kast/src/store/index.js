import React, { useReducer } from "react";
import { reducer } from "./RootReducer";
import { GlobalContext } from "../context";

const initialState = {
  users: {},
  allTasks: {}
};

//create global context for use of hooks 
export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
}
