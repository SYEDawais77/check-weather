import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-8 py-2 bg-gray-200 shadow-md ">
      {/* Logo Section */}
      <div>
        <Link to="/">
          <img
            className="h-16 w-auto rounded-lg"
            src="/images/logo.png"
            alt="Logo"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-12 text-lg font-medium pr-36">
        <Link
          to="/about"
          className="hover:text-yellow-500 transition-colors duration-300"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="hover:text-yellow-500 transition-colors duration-300"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
