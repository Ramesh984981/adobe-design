import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
      navigate("/profile");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="container">
      <div className="login-content">
      <h1 className="title">
        Signin to your <br />
        PopX account
      </h1>

      <p className="subtitle">
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit,
      </p>

      <div className="input-box">
        <span>Email Address</span>
        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input-box">
        <span>Password</span>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="login-btn" onClick={handleLogin}>
        Login
      </button>
      </div>
      </div>
  );
}

export default Login;
