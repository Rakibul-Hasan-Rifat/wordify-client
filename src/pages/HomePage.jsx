import { useEffect, useState } from "react";
import usePublicAxios from "../hooks/usePublicAxios";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const publicAxiosInstance = usePublicAxios();

  useEffect(() => {
    publicAxiosInstance.get("./data.json").then(({ data }) => {
      setBlogs(data);
    });
  }, [publicAxiosInstance]);
  console.log(blogs);
  
  return <div>HomePage {blogs.length}</div>;
};

export default HomePage;
