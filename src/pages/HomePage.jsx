import BlogCard from "../components/BlogCard";
import useBlogs from "../hooks/useBlogs";

const HomePage = () => {
  const blogs = useBlogs();

  return (
    <div className="grid grid-cols-3 gap-3">
      {blogs.slice(0, 6).map((blog, indx) => (
        <BlogCard key={indx} blog={blog} />
      ))}
    </div>
  );
};

export default HomePage;
