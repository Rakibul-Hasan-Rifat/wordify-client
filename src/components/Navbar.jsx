import { Button } from "@mui/material";
import { Link, NavLink } from "react-router";

const pageLinks = ["Home", "All Blogs", "Add Blog"];

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-5">
      <Link to="/">
        <h3>Wordify</h3>
      </Link>
      <ul className="flex gap-4">
        {pageLinks.map((link, idx) => (
          <li key={idx}>
            <NavLink
              to={`/${link
                .toLowerCase()
                .replaceAll(" ", "-")
                .replace("home", "")}`}
              className={({ isActive }) =>
                isActive
                  ? "py-1 px-1.5 font-semibold border-b-2 text-blue-400"
                  : "px-1.5 font-semibold"
              }
            >
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="flex gap-1.5">
        <Button variant="contained" size="medium">
          Register
        </Button>
        <Button variant="outlined" size="medium">
          Login
        </Button>
      </div>
    </nav>
  );
};
export default Navbar;
