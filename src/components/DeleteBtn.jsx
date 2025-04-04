import { Tooltip } from "@mui/material";
import { FaTrashAlt } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

const DeleteBtn = ({ blogId }) => {
  const { user } = useAuth();

  const handleRemoveFromWishlist = (id) => {
    console.log(id);
    const deleteSingleWish = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_server_url}/wish-list/${
          user?.email
        }?blogId=${id}`,
        {
          method: "DELETE",
        }
      );
      const result = await response.json();
      console.log(result);
    };

    deleteSingleWish();
  };
  return (
    <Tooltip title="Remove from wishlist">
      <button
        onClick={() => handleRemoveFromWishlist(blogId)}
        className="p-3 rounded-full bg-red-500/30 cursor-pointer hover:bg-red-400/50 text-red-500 text-lg"
      >
        <FaTrashAlt />
      </button>
    </Tooltip>
  );
};

export default DeleteBtn;
