import React from "react";

const AuthForm = ({ email, password, setEmail, setPassword, handleSubmit, buttonText }) => {
  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Mật khẩu"
      />
      <button onClick={handleSubmit}>{buttonText}</button>
    </div>
  );
};

export default AuthForm;