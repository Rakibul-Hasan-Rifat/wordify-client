import useBlogs from "../hooks/useBlogs";
import BlogCard from "../components/BlogCard";
import { useEffect, useState } from "react";

const AllBlogsPage = () => {
  const { blogs } = useBlogs();
  const [searchBlogs, setSearchBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [query, setQuery] = useState({ title: "", category: "" });

  useEffect(() => setSearchBlogs(blogs), [blogs]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_server_url}/distinct-category`
      );
      const categories = await response.json();
      setCategories(categories);
    };

    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setQuery((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    const fetchData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_server_url}/search-blogs?title=${
          name === "title" ? e.target.value : query.title
        }&category=${name === "category" ? e.target.value : query.category}`
      );
      const result = await response.json();
      setSearchBlogs(result);
    };

    fetchData();
  };

  return (
    <>
      <div className="my-5 flex justify-center gap-2 sticky top-0">
        <select
          name="category"
          onChange={handleChange}
          defaultValue={'Select One'}
          className="px-4 py-2 bg-white border border-gray-300/70 outline-0 rounded"
        >
          <option disabled>
            Select One
          </option>
          {categories?.map((category, idx) => (
            <option key={idx} value={category}>{category}</option>
          ))}
        </select>
        <input
          type="text"
          name="title"
          onChange={handleChange}
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
