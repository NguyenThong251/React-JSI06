import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../service/firebaseConfig";
import { Link } from "react-router-dom";
import AuthForm from "../../components/user/form/AuthForm";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Đăng nhập thành công");
    } catch (error) {
      console.error("Đăng nhập thất bại", error);
    }
  };

  return (
    <div>
      <h2>Đăng nhập</h2>
      <AuthForm
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleSubmit={handleLogin}
        buttonText="Đăng nhập"
      />
      <p>Chưa có tài khoản? <Link to="/signup">Đăng ký</Link></p>
    </div>
  );
};

export default Login;