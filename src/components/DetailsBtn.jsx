import { Link } from "react-router";
import { Tooltip } from "@mui/material";
import { FaArrowRightLong } from "react-icons/fa6";

const DetailsBtn = ({ blogId }) => {
  return (
    <Tooltip title="DETAILS">
      <Link to={`/all-blogs/${blogId}`}>
        <button className="p-3 rounded-full bg-green-500/30 cursor-pointer hover:bg-green-400/50 text-green-500 text-lg">
          <FaArrowRightLong />
        </button>
      </Link>
    </Tooltip>
  );
};

export default DetailsBtn;
