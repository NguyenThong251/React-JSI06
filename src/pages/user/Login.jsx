import React, { useState } from "react";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../service/firebaseConfig";
import { Link,useNavigate  } from "react-router-dom";
import AuthForm from "../../components/user/form/AuthForm";
import Swal from "sweetalert2";
const googleProvider = new GoogleAuthProvider();
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

    // Lưu thông tin vào Local Storage
    const user = userCredential.user;
    localStorage.setItem("user", JSON.stringify({ email: user.email, uid: user.uid }));
      Swal.fire({
        icon: "success",
        title: "Đăng nhập thành công!",
        text: "Chào mừng bạn quay lại!",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/"); // Chuyển hướng về trang chủ
        window.location.reload();
       
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Đăng nhập thất bại!",
        text: "Email hoặc mật khẩu không đúng.",
        confirmButtonText: "Thử lại",
      });
    }
  };
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      Swal.fire({
        icon: "success",
        title: "Đăng nhập bằng Google thành công!",
        text: `Chào mừng bạn, ${user.displayName}`,
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/"); // Chuyển hướng về trang chủ
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Đăng nhập thất bại!",
        text: "Đã xảy ra lỗi trong quá trình đăng nhập bằng Google.",
        confirmButtonText: "Thử lại",
      });
    }
  };
  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Đăng nhập
      </h2>
      
      <AuthForm
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleSubmit={handleLogin}
        buttonText="Đăng nhập"
      />

      {/* Submit Button */}
      <button
        onClick={handleLogin}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-indigo-500 transition duration-300"
      >
        Đăng nhập
      </button>

      {/* Google Login */}
      <button
        onClick={handleGoogleLogin}
        className="w-full mt-4 bg-red-400 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-400 transition duration-300 flex items-center justify-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 48 48"
        >
          <path
            fill="#EA4335"
            d="M24 9.5c3.4 0 6.2 1.2 8.3 3.2l6.2-6.2C34.6 3.5 29.6 1.5 24 1.5c-9.6 0-17.7 5.5-21.7 13.5l7.4 5.7C12 12.9 17.6 9.5 24 9.5z"
          />
          <path
            fill="#34A853"
            d="M24 46.5c6.3 0 11.7-2.1 15.5-5.8l-7.4-5.7c-2.2 1.5-5.1 2.5-8.1 2.5-6.1 0-11.2-4-13-9.4H3.5v5.9C7.6 41 15.1 46.5 24 46.5z"
          />
          <path
            fill="#FBBC05"
            d="M37.5 24c0-1.5-.2-3-.6-4.4H24v8.4h7.6c-.9 2.5-2.5 4.6-4.7 5.9l7.4 5.7c4.4-4 7-9.8 7-16.6z"
          />
          <path
            fill="#4285F4"
            d="M46.5 24c0-1.8-.2-3.5-.6-5.1H24v9.6h12.4c-1.3 4.2-5.2 7.3-9.6 7.3-6.1 0-11.2-4-13-9.4H3.5v5.9C7.6 41 15.1 46.5 24 46.5c11.6 0 21-9.4 21-21z"
          />
        </svg>
        Đăng nhập bằng Google
      </button>

      {/* Signup Link */}
      <p className="text-center text-gray-600 mt-4">
        Chưa có tài khoản?{" "}
        <Link
          to="/signup"
          className="text-indigo-600 font-medium hover:underline"
        >
          Đăng ký
        </Link>
      </p>
    </div>
  </div>
  );
};

export default Login;