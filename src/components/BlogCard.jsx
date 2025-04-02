import { Link } from "react-router";
import { FaHeart } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Rating, Tooltip, Zoom } from "@mui/material";
import useAuth from "../hooks/useAuth";

const BlogCard = ({ blog }) => {
  const { user } = useAuth();
  const { _id, title, url, category, chef, prep_time, price, rating } = blog;
  console.log(user);

  const handleWishlist = (id) => {

    fetch(`${import.meta.env.VITE_server_url}/wish-list`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: user?.email, blogId: id }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  return (
    <div
      className="border rounded-2xl text-white p-4 bg-cover bg-center "
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${url})`,
      }}
    >
      <p className="flex justify-between">
        <small className="px-2 py-0.5 rounded-lg bg-gray-400/40">
          {prep_time}
        </small>
        <small className="px-2 py-0.5 rounded-lg bg-gray-400/40">
          {category}
        </small>
      </p>
      <h3 className="font-semibold text-xl my-3">
        {title}{" "}
        <span className="px-2 py-0.5 text-2xl bg-gray-100/30 text-[#c5d418] rounded-lg">
          ${price}
        </span>
      </h3>
      <p>
        <small>
          By{" "}
          <span className="text-[#A4B200] font-semibold uppercase">
            Chef {chef.name}
          </span>
        </small>
      </p>
      <div className="my-1.5 flex items-center gap-2">
        Rating:{" "}
        <Rating
          className="bg-gray-200/20 rounded px-1 py-0.5"
          name=""
          value={rating}
          precision={0.5}
          size="small"
          readOnly
        />
      </div>
      <div className="my-1 flex items-center justify-center gap-2">
        <Tooltip
          title="DETAILS"
          slots={{
            transition: Zoom,
          }}
        >
          <Link to={`/all-blogs/${blog?._id}`}>
            <button className="p-3 rounded-full bg-gray-500/30 cursor-pointer hover:bg-gray-400/50">
              <FaArrowRightLong />
            </button>
          </Link>
        </Tooltip>
        <Tooltip title="ADD TO WISHLIST">
          <button
            onClick={() => handleWishlist(_id)}
            className="p-3 rounded-full bg-gray-500/30 cursor-pointer hover:bg-gray-400/50"
          >
            <FaHeart />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default BlogCard;
