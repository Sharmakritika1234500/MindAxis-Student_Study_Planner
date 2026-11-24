import React, { useState } from "react";
//import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if(email === "" || password === ""){
      alert("Please fill all fields ❌");
      return;
    }

    alert("Login Successful ✅");

    navigate("/");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f3f4f6",
        fontFamily: "Arial",
        padding: "20px"
      }}
    >

      <div
        style={{
          display: "flex",
          width: "850px",
          background: "white",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
        }}
      >

        {/* LEFT IMAGE SECTION */}
        <div
          style={{
            flex: 1,
            background: "#4f46e5",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px"
          }}
        >

          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
            alt="study"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px"
            }}
          />

        </div>

        {/* RIGHT LOGIN SECTION */}
        <div
          style={{
            flex: 1,
            padding: "50px"
          }}
        >

          <h1
            style={{
              textAlign: "center",
              color: "#111827",
              marginBottom: "10px"
            }}
          >
            🔐 Login
          </h1>

          <p
            style={{
              textAlign: "center",
              color: "#6b7280",
              marginBottom: "30px"
            }}
          >
            Welcome back to Student Planner 🚀
          </p>

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "10px",
              border: "1px solid #d1d5db",
              marginBottom: "20px",
              fontSize: "16px"
            }}
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "10px",
              border: "1px solid #d1d5db",
              marginBottom: "20px",
              fontSize: "16px"
            }}
          />

          {/* LOGIN BUTTON */}
          <button
            onClick={handleLogin}
            style={{
              width: "100%",
              padding: "14px",
              border: "none",
              borderRadius: "10px",
              background: "#4f46e5",
              color: "white",
              fontSize: "17px",
              cursor: "pointer"
            }}
          >
            Login 🚀
          </button>

          {/* REGISTER */}
          <p
            style={{
              textAlign: "center",
              marginTop: "25px",
              color: "#6b7280"
            }}
          >
            Don't have an account?
          </p>

          <button
            onClick={()=>navigate("/register")}
            style={{
              width: "100%",
              padding: "12px",
              border: "none",
              borderRadius: "10px",
              background: "#111827",
              color: "white",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            Create Account
          </button>

        </div>

      </div>

    </div>
  );
}

export default Login;