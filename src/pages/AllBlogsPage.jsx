import useBlogs from "../hooks/useBlogs";
import BlogCard from "../components/BlogCard";
import { useEffect, useState } from "react";

const AllBlogsPage = () => {
  const { blogs } = useBlogs();
  const [searchBlogs, setSearchBlogs] = useState([]);

  useEffect(() => {
    setSearchBlogs(blogs)
  }, [blogs])

  console.log(blogs, searchBlogs);

  const handleSearch = (e) => {
    console.log(e.target.value);
    const fetchData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_server_url}/search-blogs?text=${e.target.value}`
      );
      const result = await response.json();
      setSearchBlogs(result);
    };

    fetchData();
  };

  return (
    <>
      <div className="my-5 flex justify-center sticky top-0">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Type any text to search..."
          className="min-w-lg
           px-4 py-2 bg-white border border-gray-300/70 outline-0 rounded"
        />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {searchBlogs.map((blog, indx) => (
          <BlogCard key={indx} blog={blog} />
        ))}
      </div>
    </>
  );
};

export default AllBlogsPage;
