import useBlogs from "../hooks/useBlogs";
import BlogCard from "../components/BlogCard";

const AllBlogsPage = () => {
  const blogs = useBlogs();
  console.log(blogs);
  return (
    <div className="grid grid-cols-3 gap-3">
      {blogs.map((blog, indx) => (
        <BlogCard key={indx} blog={blog} />
      ))}
    </div>
  );
};

export default AllBlogsPage;
