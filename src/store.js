import React, { createContext, useContext, useReducer } from "react";

const MyContext = createContext({});

const initialState = {
  cars: ["BMW", "AUDI"],
  bikes: ["Yamhaa", "Enfield"]
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CAR":
      return {
        ...state,
        cars: [...state.cars, action.payload]
      };
    default:
      return state;
  }
};
export default function MyContextProvider({ children }) {
  const storeReducer = useReducer(reducer, initialState);
  return (
    <MyContext.Provider value={storeReducer}>{children}</MyContext.Provider>
  );
}

export function useStore() {
  const [state] = useContext(MyContext);
  return state;
}

export function useStoreDispatch() {
  const [, dispatch] = useContext(MyContext);
  return dispatch;
}
