import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Layout from "../components/Layout";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("token", "demo-token");
    navigate("/dashboard");
  };

  return (
    <Layout>
      <div className="login">
        <h2>Village Accounts Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
          <button type="submit">Login</button>
        </form>
        <p><Link to="/">← Back to Home</Link></p>
      </div>
    </Layout>
  );
}
