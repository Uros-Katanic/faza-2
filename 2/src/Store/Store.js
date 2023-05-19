import React, { createContext, useState, useEffect } from 'react';

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error', error);
    }
  };

  return (
    <DataContext.Provider value={{ data }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };