import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../service/firebaseConfig";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import apiClient from "../../service/apiConfig";
import AuthForm from "../../components/user/form/AuthForm";
import Swal from "sweetalert2";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential)
      const user = userCredential.user;

      // Gọi apiClient.post thay vì axios.post
      await apiClient.post("/users", {
        uid: user.uid,
        email: user.email,
      });
      Swal.fire({
        icon: "success",
        title: "Đăng ký thành công!",
        text: "Chào mừng bạn quay lại!",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/login"); // Chuyển hướng về trang chủ
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Đăng ký thất bại!",
        text: "Email hoặc mật khẩu hợp lệ đúng.",
        confirmButtonText: "Thử lại",
      });
    }
  };

  return (
    // <div>
    //   <h2>Đăng ký</h2>
    //   <AuthForm
    //     email={email}
    //     password={password}
    //     setEmail={setEmail}
    //     setPassword={setPassword}
    //     handleSubmit={handleSignUp}
    //     buttonText="Đăng ký"
    //   />
    //   <p>Đã có tài khoản? <Link to="/login">Đăng nhập</Link></p>
    // </div>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Đăng ký
        </h2>

        <AuthForm
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleSubmit={handleSignUp}
        buttonText="Đăng ký"
      />
        {/* Submit Button */}
        <button
          onClick={handleSignUp}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-indigo-500 transition duration-300"
        >
          Đăng ký
        </button>

        {/* Login Redirect */}
        <p className="text-center text-gray-600 mt-4">
          Đã có tài khoản?{" "}
          <Link
            to="/login"
            className="text-indigo-600 font-medium hover:underline"
          >
            Đăng nhập
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
