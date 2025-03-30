import { useContext } from "react";
import { DataContext } from "../providers/DataProvider";

const useBlogs = () => useContext(DataContext);

export default useBlogs;
