// import { configureStore } from '@reduxjs/toolkit';
// import reducer from './reducers';

// const store = configureStore({
//   reducer,
// });

// export default store;
// store.js
import React, { createContext, useReducer, useEffect } from 'react';

// Inicijalno stanje centralnog store-a
const initialState = {
  items: [],
  isLoading: true,
  counter: 9
};

// Tipovi akcija
const ADD_PRODUCT = 'ADD_PRODUCT';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const SET_PRODUCTS = 'SET_PRODUCTS';

// Reducer funkcija
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id ? action.payload : item
        )
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    case SET_PRODUCTS:
      return {
        ...state,
        items: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

// Kreiranje Context-a
export const StoreContext = createContext();

// Provider komponenta
export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Simulacija poziva za dobijanje svih proizvoda
  useEffect(() => {
    // Ovdje bi se obično koristila fetch metoda za poziv API-ja
    const fetchData = async () => {
      // Simuliramo dobijanje podataka
      const response = await fetch('/api/products');
      const products = await response.json();
      
      dispatch({ type: SET_PRODUCTS, payload: products });
    };

    fetchData();
  }, []);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
