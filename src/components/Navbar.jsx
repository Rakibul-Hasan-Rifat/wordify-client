import { Button } from "@mui/material";
import { Link, NavLink } from "react-router";
import useAuth from "../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";

const pageLinks = [
  "Home",
  "All Blogs",
  "Add Blog",
  "Featured Blogs",
  "Wishlist",
];

const Navbar = () => {
  const { user, logout } = useAuth();
  console.log(user);

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("User logged out successfully!");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <Toaster />
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
          {user ? (
            <>
              <img src={user?.photoURL} alt="" />
              <Button variant="contained" size="medium" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to={"/register"}>
                <Button variant="contained" size="medium">
                  Register
                </Button>
              </Link>
              <Link to={"/login"}>
                <Button variant="outlined" size="medium">
                  Login
                </Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
