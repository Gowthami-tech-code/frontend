import { useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import "./LoginPage.css"

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/users/login", { email, password });
      //localStorage.setItem("username", JSON.stringify(res.data.user));
      alert(res.data.message);
      navigate("/home"); 
      const response=await axios.post("http://localhost:5000/send-mail",{
      to:email,
      subject:"Login Notification",
      message:"you have successfully registed"});o
      
      console.log(response);
    } catch (err) {
      console.log(err); 
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      
    <form onSubmit={submitForm} className="login-form">
      <h1>Login Page</h1>
      <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
      
      <button type="submit">Login</button>
      
    </form>
    </div>
  );
};

export default LoginForm;
