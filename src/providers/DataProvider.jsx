import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${import.meta.env.VITE_server_url}/blogs`);
      const result = await response.json();
      setBlogs(result);
      console.log(result);
    };
    fetchData();
  }, []);

  return <DataContext.Provider value={blogs}>{children}</DataContext.Provider>;
};

export default DataProvider;
