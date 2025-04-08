import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import { MdWatchLater } from "react-icons/md";
import { CiCircleList } from "react-icons/ci";
import { GiCampCookingPot } from "react-icons/gi";
import { Button } from "@mui/material";

const BlogDetails = () => {
  const { blogId } = useParams();
  const [blogDetails, setBlogDetails] = useState({});
  console.log(blogId);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_server_url}/blogs/blog-details/${blogId}`
      );
      const result = await response.json();
      setBlogDetails(result);
    };
    fetchBlogDetails();
  }, [blogId]);

  console.log(blogDetails);

  const {
    _id,
    url,
    chef,
    title,
    price,
    rating,
    reviews,
    category,
    prep_time,
    description,
    recipes_count,
    popular_recipes,
    ingredients_used,
  } = blogDetails;

  return (
    <div className="max-w-2xl mx-auto p-3 bg-gray-300/40 rounded-2xl overflow-hidden shadow-xl">
      <div className="relative">
        <img
          src={url}
          alt=""
          className="w-full object-cover object-center rounded-xl"
        />
        <h2 className="w-3/4 mx-auto absolute top-1/2 left-1/2 -translate-1/2 py-5 px-5 rounded-br-full rounded-tl-full bg-blue-400 text-white text-4xl text-center font-semibold">
          {title}
          <p className="absolute bottom-[100%] right-0 bg-gray-800/70 text-white text-sm font- px-3 py-1 rounded-3xl">
            {category}
          </p>
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-3 items-center justify-between my-6">
        <p className="flex flex-col items-center justify-center bg-white shadow-lg p-5 gap-4 rounded cursor-pointer hover:bg-emerald-600 hover:text-white">
          <span className="flex flex-col items-center">
            <MdWatchLater size={60} />
            <small>Time to prepare</small>
          </span>
          <span className="text-2xl">{prep_time}</span>
        </p>
        <p className="flex flex-col items-center justify-center bg-white shadow-lg p-5 gap-4 rounded cursor-pointer hover:bg-emerald-600 hover:text-white">
          <span className="flex flex-col items-center">
            <CiCircleList size={60} />
            <small>Total Ingredients</small>
          </span>
          <span className="text-2xl">{ingredients_used?.length}</span>
        </p>
        <p className="flex flex-col items-center justify-center bg-white shadow-lg p-5 gap-4 rounded cursor-pointer hover:bg-emerald-600 hover:text-white">
          <span className="flex flex-col items-center">
            <GiCampCookingPot size={60} />
            <small>Total Recipes</small>
          </span>
          <span className="text-2xl">{recipes_count}</span>
        </p>
      </div>
      <div className="flex justify-center gap-2 bg-white rounded py-3 px-1">
        <ul className="text-right">
          <h4 className="font-semibold">Popular Recipes</h4>
          {popular_recipes?.map((recipe, idx) => (
            <li key={idx}>{recipe}</li>
          ))}
        </ul>
        <div className="flex flex-col items-end justify-end">
          {popular_recipes?.length === ingredients_used?.length ||
          popular_recipes?.length > ingredients_used?.length
            ? popular_recipes?.map((_, i) => <span key={i}>✅</span>)
            : ingredients_used?.map((_, i) => <span key={i}>✅</span>)}
        </div>
        <ul>
          <h4 className="font-semibold">Ingredients</h4>
          {ingredients_used?.map((ingredient, idx) => (
            <li key={idx}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="my-3">
        <p>{description}</p>
      </div>
      <div>
        <Link to={`/all-blogs/update/${_id}`}>
          <Button size="large" variant="contained" className="w-full">
            Update
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogDetails;
