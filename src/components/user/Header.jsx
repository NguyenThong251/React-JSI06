import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useCartStore from "../../store/cartStore";
import { TbShoppingCart } from "react-icons/tb";
export default function Header() {
  const logoImg = "https://png.pngtree.com/template/20191015/ourmid/pngtree-fashion-girl-logo-design-template-image_318080.jpg";
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const cart = useCartStore((state) => state.cart);
  // Kiểm tra localStorage để lấy thông tin user
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Xử lý đăng xuất
  const handleLogout = () => {
    localStorage.removeItem("user"); // Xóa dữ liệu user trong localStorage
    setUser(null); // Xóa trạng thái user
    navigate("/login"); // Chuyển hướng về trang đăng nhập
  };

  return (
    <>
      <header className="bg-white px-10 lg:px-20 mx-auto shadow-md fixed top-0 w-full z-50">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Logo" className="w-14 h-14 object-contain" />
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-8 text-lg font-medium">
            <li>
              <Link
                to="/"
                className="text-gray-600 hover:text-indigo-600 transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="text-gray-600 hover:text-indigo-600 transition-all duration-300"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-600 hover:text-indigo-600 transition-all duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-gray-600 hover:text-indigo-600 transition-all duration-300"
              >
                Blog
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-5">

          <div className="relative">
            <Link
              to="/cart"
              className="text-gray-600 hover:text-indigo-600 transition-all duration-300"
              >
              <TbShoppingCart className="w-8 h-8" />
            </Link>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
        </div>
          {/* User Info / Auth Buttons */}
          {user ? (
            <div className="hidden md:flex items-center gap-4">
              <span className="text-gray-600 font-medium">Chào, {user.email}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white text-lg font-semibold px-6 py-2 rounded-lg transition-all hover:bg-red-400 hover:shadow-lg"
                >
                Đăng xuất
              </button>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-4">
              <Link
                to="/login"
                className="bg-indigo-600 text-white text-lg font-semibold px-6 py-2 rounded-lg transition-all hover:bg-indigo-500 hover:shadow-lg"
                >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-white text-indigo-600 border border-indigo-600 text-lg font-semibold px-6 py-2 rounded-lg transition-all hover:bg-indigo-50 hover:shadow-lg"
              >
                Signup
              </Link>
            </div>
          )}
            </div>

          {/* Mobile Burger Menu */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-600 focus:outline-none hover:text-indigo-600"
              >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
