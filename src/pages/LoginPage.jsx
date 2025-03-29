import { Button } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const LoginPage = () => {
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData.entries());
    console.log(email, password);
    
    login(email, password)
      .then(() => {
        toast.success("User logged in successfully!");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="py-8 px-5 max-w-lg mx-auto rounded-2xl bg-gray-400/20 shadow-lg">
      <h2 className="text-3xl text-center text-gray-500 font-semibold mb-5">
        LOGIN
      </h2>
      <form onSubmit={handleLogin} className=" flex flex-col gap-2">
        <input
          type="email"
          name="email"
          placeholder="Type your email...."
          className="px-4 py-2 border border-gray-300/70 outline-0 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Type your password...."
          className="px-4 py-2 border border-gray-300/70 outline-0 rounded"
        />
        <Button type="submit" className="" variant="contained">
          Login
        </Button>
      </form>
      <p className="my-3 text-right">
        Don't have an account? Please{" "}
        <Link
          to={"/register"}
          className="font-semibold text-blue-400 border-b border-b-blue-500"
        >
          register
        </Link>
      </p>
      <div className="flex items-center justify-center">
        <button className="px-2 py-1 flex justify-between items-center gap-2.5 border border-gray-400 rounded-3xl cursor-pointer">
          <FcGoogle />
          <span>Google Login</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
