import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    await axios.post("http://localhost:3000/api/users/register", { name, email, password });
    window.location.href = "/";
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;