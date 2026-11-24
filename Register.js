
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const handleRegister = async () => {

    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {

      const response = await axios.post(
        "http://localhost:5000/register",
        {
          name,
          email,
          password,
        }
      );

      if (response.data.success) {

        alert("Registration Successful");

        navigate("/");

      } else {

        alert("Registration Failed");

      }

    } catch (error) {

      console.log(error);

      alert("Server Error");

    }

  };

  return (

    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(to right,#dbeafe,#ede9fe)",
        fontFamily: "Arial",
      }}
    >

      <div
        style={{
          width: "400px",
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          boxShadow:
            "0 10px 25px rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
      >

        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="register"
          style={{
            width: "100px",
            marginBottom: "10px",
          }}
        />

        <h1>Create Account</h1>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          style={{
            width: "90%",
            padding: "12px",
            marginTop: "15px",
            borderRadius: "10px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          style={{
            width: "90%",
            padding: "12px",
            marginTop: "15px",
            borderRadius: "10px",
            border: "1px solid #ccc",
          }}
        />

        <div
          style={{
            position: "relative",
          }}
        >

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            style={{
              width: "90%",
              padding: "12px",
              marginTop: "15px",
              borderRadius: "10px",
              border: "1px solid #ccc",
            }}
          />

          <span
            onClick={() =>
              setShowPassword(!showPassword)
            }
            style={{
              position: "absolute",
              right: "20px",
              top: "28px",
              cursor: "pointer",
            }}
          >
            {showPassword ? "🙈" : "👁"}
          </span>

        </div>

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(
              e.target.value
            )
          }
          style={{
            width: "90%",
            padding: "12px",
            marginTop: "15px",
            borderRadius: "10px",
            border: "1px solid #ccc",
          }}
        />

        <button
          onClick={handleRegister}
          style={{
            width: "95%",
            padding: "14px",
            marginTop: "20px",
            border: "none",
            borderRadius: "12px",
            background: "#4f46e5",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Register
        </button>

        <p
          style={{
            marginTop: "20px",
          }}
        >
          Already have account?

          <span
            onClick={() =>
              navigate("/login")
            }
            style={{
              color: "blue",
              cursor: "pointer",
              marginLeft: "5px",
            }}
          >
            Login
          </span>

        </p>

      </div>

    </div>

  );

}

export default Register;

