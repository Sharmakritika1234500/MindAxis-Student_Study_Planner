import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Contact() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {

  if (
    name === "" ||
    email === "" ||
    message === ""
  ) {

    alert("Please fill all fields ❌");

    return;
  }

  try {

    const response = await axios.post(
      "http://localhost:5000/api/contact",
      {
        name,
        email,
        message
      }
    );

    if (response.data.success) {

      alert("Message Sent Successfully ✅");

      setName("");
      setEmail("");
      setMessage("");

    }

  } catch (error) {

    console.log(error);

    alert("Server Error");

  }

};

  return React.createElement(

    "div",

    {
      style: {
        padding: "40px",
        minHeight: "100vh",
        background: "linear-gradient(#dbeafe,#ede9fe)",
        fontFamily: "Arial"
      }
    },

    // TITLE
    React.createElement(
      "h1",
      {
        style: {
          textAlign: "center",
          fontSize: "50px"
        }
      },
      "📞 Contact Us"
    ),

    React.createElement(
      "p",
      {
        style: {
          textAlign: "center",
          fontSize: "18px",
          marginBottom: "40px"
        }
      },
      "We would love to hear from you!"
    ),

    // MAIN CONTAINER
    React.createElement(

      "div",

      {
        style: {
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "wrap"
        }
      },

      // LEFT CONTACT INFO
      React.createElement(

        "div",

        {
          style: {
            background: "white",
            padding: "30px",
            borderRadius: "25px",
            width: "350px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
          }
        },

        React.createElement("h2", null, "📍 Contact Information"),

        React.createElement(
          "p",
          { style: { marginTop: "20px" } },
          "📧 Email: support@studentplanner.com"
        ),

        React.createElement(
          "p",
          null,
          "📱 Phone: +91 9876543210"
        ),

        React.createElement(
          "p",
          null,
          "📍 Address: Mohali, Punjab, India"
        ),

        React.createElement(
          "p",
          null,
          "⏰ Support Available: 24/7"
        ),

        React.createElement(

          "div",

          {
            style: {
              marginTop: "25px",
              padding: "15px",
              background: "#eef2ff",
              borderRadius: "15px"
            }
          },

          React.createElement(
            "h3",
            null,
            "🌟 Why Contact Us?"
          ),

          React.createElement(
            "p",
            null,
            "Get help with study planning, AI assistant, timetable issues, and progress tracking."
          )

        )

      ),

      // RIGHT CONTACT FORM
      React.createElement(

        "div",

        {
          style: {
            background: "white",
            padding: "30px",
            borderRadius: "25px",
            width: "450px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
          }
        },

        React.createElement("h2", null, "✉ Send Message"),

        // NAME INPUT
        React.createElement("input", {

          type: "text",
          placeholder: "Enter your name",
          value: name,
          onChange: (e) => setName(e.target.value),

          style: {
            width: "100%",
            padding: "12px",
            marginTop: "20px",
            borderRadius: "10px",
            border: "1px solid #ccc"
          }

        }),

        // EMAIL INPUT
        React.createElement("input", {

          type: "email",
          placeholder: "Enter your email",
          value: email,
          onChange: (e) => setEmail(e.target.value),

          style: {
            width: "100%",
            padding: "12px",
            marginTop: "15px",
            borderRadius: "10px",
            border: "1px solid #ccc"
          }

        }),

        // MESSAGE INPUT
        React.createElement("textarea", {

          placeholder: "Write your message...",
          value: message,
          onChange: (e) => setMessage(e.target.value),

          style: {
            width: "100%",
            height: "120px",
            padding: "12px",
            marginTop: "15px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            resize: "none"
          }

        }),

        // SEND BUTTON
        React.createElement(

          "button",

          {
            onClick: handleSubmit,

            style: {
              marginTop: "20px",
              padding: "12px 25px",
              background: "#4f46e5",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "16px",
              cursor: "pointer",
              width: "100%"
            }
          },

          "Send Message 🚀"

        )

      )

    ),

    // FAQ SECTION
    React.createElement(

      "div",

      {
        style: {
          marginTop: "60px",
          background: "white",
          padding: "35px",
          borderRadius: "25px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
        }
      },

      React.createElement(

        "h2",

        {
          style: {
            textAlign: "center",
            marginBottom: "25px"
          }
        },

        "❓ Frequently Asked Questions"

      ),

      React.createElement(

        "div",

        {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "20px"
          }
        },

        [
          "How to use AI Assistant?",
          "How to create timetable?",
          "How to track study progress?",
          "How to contact support?"
        ].map((item, index) =>

          React.createElement(

            "div",

            {
              key: index,

              style: {
                background: "#f3f4f6",
                padding: "20px",
                borderRadius: "15px"
              }
            },

            React.createElement("h3", null, item),

            React.createElement(
              "p",
              null,
              "Our support team and smart tools are always available to help students."
            )

          )

        )

      )

    ),

    // BACK BUTTON
    React.createElement(

      "button",

      {
        onClick: () => navigate("/"),

        style: {
          marginTop: "40px",
          padding: "12px 25px",
          border: "none",
          borderRadius: "10px",
          background: "#111827",
          color: "white",
          fontSize: "16px",
          cursor: "pointer",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto"
        }
      },

      "⬅ Back Home"

    )

  );

}

export default Contact;