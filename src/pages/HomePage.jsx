import { useEffect, useState } from "react";
import usePublicAxios from "../hooks/usePublicAxios";
import BlogCard from "../components/BlogCard";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const publicAxiosInstance = usePublicAxios();

  useEffect(() => {
    publicAxiosInstance.get("./data.json").then(({ data }) => {
      setBlogs(data);
    });
  }, [publicAxiosInstance]);
  console.log(blogs);

  return (
    <div className="grid grid-cols-3 gap-3">
      {blogs.map((blog, indx) => (
        <BlogCard key={indx} blog={blog} />
      ))}
    </div>
  );
};

export default HomePage;
