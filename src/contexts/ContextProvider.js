import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [isMenu, setisMenu] = useState(true);
  const [isClicked, setisClicked] = useState(initialState);
  const [screenSize, setscreenSize] = useState(undefined);

    const ClickHandler = (clicked) => setisClicked({ ...initialState, [clicked]: true });

  return (
    <StateContext.Provider
      value={{ isMenu, setisMenu, isClicked, setisClicked,initialState, ClickHandler, screenSize, setscreenSize }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
