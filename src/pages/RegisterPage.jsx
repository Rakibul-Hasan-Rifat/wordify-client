import { Button } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const { register, updateUser } = useAuth();

  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { name, email, password, image_url } = Object.fromEntries(
      formData.entries()
    );
    console.log({ name, email, password, image_url });
    console.log("auth info", register);
    register(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("User registered successfully!");
        updateUser(name, image_url)
          .then(() => {
            toast.success("User's name and photo is updated!!");
          })
          .catch((err) => console.log(err.message));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="py-8 px-5 max-w-lg mx-auto rounded-2xl bg-gray-400/20 shadow-lg">
      <h2 className="text-3xl text-center text-gray-500 font-semibold mb-5">
        REGISTER
      </h2>
      <form onSubmit={handleRegister} className=" flex flex-col gap-2">
        <input
          type="text"
          name="name"
          placeholder="Type your name...."
          className="px-4 py-2 border border-gray-300/70 outline-0 rounded"
        />
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
        <input
          type="text"
          name="image_url"
          placeholder="Provide your image url here...."
          className="px-4 py-2 border border-gray-300/70 outline-0 rounded"
        />
        <Button type="" className="" variant="contained">
          Register
        </Button>
      </form>
      <p className="my-3 text-right">
        Already have an account? Please{" "}
        <Link
          to={"/login"}
          className="font-semibold text-blue-400 border-b border-b-blue-500"
        >
          login
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

export default RegisterPage;
