import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="my-5 p-12 flex flex-col gap-4 items-center justify-center bg-[#d9d5c5]">
      <div className="flex items-center gap-4">
        <Link to={"https://www.youtube.com/"}>
          <FaYoutube />
        </Link>
        <Link to={"https://x.com/"}>
          <FaXTwitter />
        </Link>
        <Link to={"https://www.facebook.com/"}>
          <FaFacebook />
        </Link>
        <Link to={"https://www.instagram.com/"}>
          <FaInstagram />
        </Link>
      </div>
      <p>&copy; {new Date().getFullYear()} sous chef — culinary blog</p>
    </footer>
  );
};

export default Footer;
