import React from "react";
import { useNavigate } from "react-router-dom";

function Help() {

  const navigate = useNavigate();

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
          fontSize: "45px",
          marginBottom: "20px"
        }
      },

      "❓ Help Center"

    ),

    // INTRO
    React.createElement(

      "p",

      {
        style: {
          textAlign: "center",
          fontSize: "18px",
          marginBottom: "40px"
        }
      },

      "Need help using the Student Study Planner? Find answers below."

    ),

    // FAQ SECTION
    React.createElement(

      "div",

      {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "20px"
        }
      },

      // CARD 1
      React.createElement(

        "div",

        {
          style: {
            background: "white",
            padding: "20px",
            borderRadius: "20px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
          }
        },

        React.createElement(
          "h2",
          null,
          "📅 How to Create Timetable?"
        ),

        React.createElement(
          "p",
          null,
          "Go to Timetable page and add your subjects and study timings."
        )

      ),

      // CARD 2
      React.createElement(

        "div",

        {
          style: {
            background: "white",
            padding: "20px",
            borderRadius: "20px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
          }
        },

        React.createElement(
          "h2",
          null,
          "🤖 How AI Assistant Works?"
        ),

        React.createElement(
          "p",
          null,
          "Ask study-related questions and AI will help you instantly."
        )

      ),

      // CARD 3
      React.createElement(

        "div",

        {
          style: {
            background: "white",
            padding: "20px",
            borderRadius: "20px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
          }
        },

        React.createElement(
          "h2",
          null,
          "📈 How to Track Progress?"
        ),

        React.createElement(
          "p",
          null,
          "Open Progress page to see your completed study goals."
        )

      ),

      // CARD 4
      React.createElement(

        "div",

        {
          style: {
            background: "white",
            padding: "20px",
            borderRadius: "20px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
          }
        },

        React.createElement(
          "h2",
          null,
          "📞 Contact Support"
        ),

        React.createElement(
          "p",
          null,
          "Email us at support@studentplanner.com for help."
        )

      )

    ),

    // SUPPORT BOX
    React.createElement(

      "div",

      {
        style: {
          marginTop: "50px",
          background: "white",
          padding: "30px",
          borderRadius: "25px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          textAlign: "center"
        }
      },

      React.createElement(
        "h2",
        null,
        "💬 Still Need Help?"
      ),

      React.createElement(
        "p",
        null,
        "Our support team is available 24/7 to help students."
      ),

      React.createElement(

        "button",

        {
          onClick: () => navigate("/contact"),

          style: {
            padding: "12px 25px",
            marginTop: "15px",
            border: "none",
            borderRadius: "10px",
            background: "#6366f1",
            color: "white",
            fontSize: "16px",
            cursor: "pointer"
          }
        },

        "Contact Support"

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

export default Help;