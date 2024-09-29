import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../service/firebaseConfig";
import axios from "axios";
import { Link } from "react-router-dom";
import apiClient from "../../service/apiConfig";
import AuthForm from "../../components/user/form/AuthForm";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Gọi apiClient.post thay vì axios.post
      await apiClient.post("/users", {
        uid: user.uid,
        email: user.email,
      });
      alert("Đăng ký thành công");
    } catch (error) {
      console.error("Đăng ký thất bại", error);
    }
  };

  return (
    <div>
      <h2>Đăng ký</h2>
      <AuthForm
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleSubmit={handleSignUp}
        buttonText="Đăng ký"
      />
      <p>Đã có tài khoản? <Link to="/login">Đăng nhập</Link></p>
    </div>
  );
};

export default SignUp;
