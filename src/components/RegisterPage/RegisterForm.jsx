import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';
import "./RegisterForm.css";

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://backend-890j.onrender.com/api/users/register", {
        username,
        email,
        password
      });
      alert(res.data.message);
      navigate("/login"); 
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="register-container">
      <form className="registration-form" onSubmit={submitForm}>
        <h1>Register Form</h1>
        <input type="text" placeholder="Username" required onChange={(e) => setUsername(e.target.value)} />
        <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
        <p>
          Already have an account? <Link to="/login">Sign in <FaArrowRight /></Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
