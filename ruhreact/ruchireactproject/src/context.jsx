import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
const AppContext = React.createContext();
  const API="https://dummyjson.com/recipes";
  
            
const intialState = {
  name: "",
  image: "",
  services:[],
};
          
       const AppProvider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, intialState);
        
             
  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Ruchi Technical",
        image: "./images/hero.svg",
      },
    }); 
  }; 
   
  const udpateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE", 
      payload: {
        name: "Technical Thapa",
        image: "./images/about1.svg",
      },
    }); 
  };
  const getServices = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      // Extract the recipes array from the response
      const recipes = data.recipes; 
      dispatch({ type: "GET_SERVICES", payload: recipes });
    } catch (error) {
      console.log(error);
    }
  };   
  
     useEffect(()=> {
       getServices(API);
     },[]); 
           
  return (
    <AppContext.Provider value={{ ...state, updateHomePage, udpateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

// gloabal custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
                  