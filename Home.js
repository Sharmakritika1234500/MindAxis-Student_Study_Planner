import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  
  return React.createElement(
    "div",
    {
      style: {
        textAlign: "center",
        padding: "30px",
        background: "linear-gradient(135deg,#dbeafe,#ede9fe,#fce7f3)",
        minHeight: "100vh",
        fontFamily: "Arial",
        position: "relative"
      }
    },

    // TOP RIGHT BUTTONS
  
React.createElement(
  "div",
  {
    style:{
      position:"absolute",
      top:"20px",
      right:"20px",
      zIndex:"1000",
      display:"flex",
      gap:"10px"
    }
  },
      // LOGIN
      React.createElement(
        "button",
        {
          onClick: () => navigate("/login"),

          style: {
            padding: "12px 22px",
            border: "none",
            borderRadius: "12px",
            background: "#4f46e5",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
            fontWeight: "bold"
          }
        },

        "🔐 Login"
      ),

      // REGISTER
      React.createElement(
        "button",
        {
          onClick: () => navigate("/register"),

          style: {
            padding: "12px 22px",
            border: "none",
            borderRadius: "12px",
            background: "#7c3aed",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
            fontWeight: "bold"
          }
        },

        "📝 Register"
      ),

      // LOGOUT
      React.createElement(
        "button",
        {
          onClick: () => {

            localStorage.removeItem("savedEmail");
            localStorage.removeItem("savedPassword");

            alert("✅ Logged Out");

            navigate("/login");
          },

          style: {
            padding: "12px 22px",
            border: "none",
            borderRadius: "12px",
            background: "#ef4444",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
            fontWeight: "bold"
          }
        },

        "🚪 Logout"
      )
    ),

    // TOP MARQUEE
    React.createElement(
      "marquee",
      {
        style: {
          padding: "12px",
          background: "#4f46e5",
          color: "white",
          borderRadius: "12px",
          fontSize: "18px",
          fontWeight: "bold",
          marginTop: "70px"
        }
      },
      "✨ Smart Planner • AI Assistant • Weekly Goals • Exam Countdown • Tasks • Progress Tracker ✨"
    ),

    // TITLE
    React.createElement(
      "h1",
      {
        style: {
          fontSize: "55px",
          marginTop: "30px",
          color: "#111827"
        }
      },
      "📚 Student Study Planner"
    ),

    React.createElement(
      "p",
      {
        style: {
          fontSize: "20px",
          color: "#374151",
          marginTop: "10px"
        }
      },
      "Plan Better • Study Smarter • Track Progress 🚀"
    ),

    // IMAGE
    React.createElement(
      "img",
      {
        src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",

        style: {
          width: "80%",
          maxWidth: "700px",
          borderRadius: "25px",
          marginTop: "30px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          transition: "0.4s"
        },

        onMouseOver: (e) => {
          e.target.style.transform = "scale(1.03)";
        },

        onMouseOut: (e) => {
          e.target.style.transform = "scale(1)";
        }
      }
    ),

    // FEATURES
    React.createElement(
      "h2",
      {
        style: {
          marginTop: "50px",
          fontSize: "38px",
          color: "#111827"
        }
      },
      "✨ Features"
    ),

    React.createElement(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "25px",
          marginTop: "30px"
        }
      },

      [
        {
          title: "📅 Timetable",
          desc: "Create smart study schedules"
        },
        {
          title: "📝 Tasks",
          desc: "Manage daily study tasks"
        },
        {
          title: "🤖 AI Assistant",
          desc: "Ask coding & study questions"
        },
        {
          title: "📈 Progress",
          desc: "Track your learning progress"
        },
        {
          title: "📚 Blog",
          desc: "Read study blogs & tips"
        },
        {
          title: "📊 Dashboard",
          desc: "See all analytics in one place"
        }
      ].map((item, index) =>

        React.createElement(
          "div",
          {
            key: index,

            style: {
              background: "white",
              padding: "25px",
              borderRadius: "25px",
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              transition: "0.3s",
              cursor: "pointer"
            },

            onMouseOver: (e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
            },

            onMouseOut: (e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }
          },

          React.createElement(
            "h2",
            {
              style: {
                fontSize: "28px"
              }
            },
            item.title
          ),

          React.createElement(
            "p",
            {
              style: {
                marginTop: "15px",
                fontSize: "17px",
                color: "#4b5563"
              }
            },
            item.desc
          )
        )
      )
    ),

    // QUICK MENU
    React.createElement(
      "div",
      {
        style: {
          marginTop: "60px",
          background: "white",
          padding: "35px",
          borderRadius: "30px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
        }
      },

      React.createElement(
        "h2",
        {
          style: {
            fontSize: "35px",
            marginBottom: "25px"
          }
        },
        "⚡ Quick Menu"
      ),

      [
        {
          name: "📅 Timetable",
          page: "timetable",
          color: "#06b6d4"
        },
        {
          name: "📊 Dashboard",
          page: "dashboard",
          color: "#10b981"
        },
        {
          name: "📈 Progress",
          page: "progress",
          color: "#f59e0b"
        },
        {
          name: "🤖 AI Assistant",
          page: "assistant",
          color: "#ec4899"
        },
        {
          name: "📝 Tasks",
          page: "task",
          color: "#ef4444"
        },
        {
          name: "📚 Blog",
          page: "blog",
          color: "#6366f1"
        }
      ].map((btn, index) =>

        React.createElement(
          "button",
          {
            key: index,

            onClick: () => navigate("/" + btn.page),

            style: {
              padding: "15px 25px",
              margin: "10px",
              border: "none",
              borderRadius: "14px",
              background: btn.color,
              color: "white",
              fontSize: "17px",
              cursor: "pointer",
              boxShadow: "0 5px 15px rgba(0,0,0,0.15)"
            }
          },

          btn.name
        )
      )
    ),
// STUDY TIPS
React.createElement(
  "div",
  {
    style: {
      marginTop: "50px"
    }
  },

  React.createElement(
    "h2",
    {
      style: {
        fontSize: "38px",
        marginBottom: "25px"
      }
    },
    "💡 Smart Study Tips"
  ),

  React.createElement(
    "div",
    {
      style: {
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(250px,1fr))",
        gap: "20px"
      }
    },

    [
      "📚 Revise daily for better memory",
      "⏰ Study using Pomodoro technique",
      "🎯 Focus on one task at a time",
      "😴 Sleep properly before exams",
      "📝 Practice previous year papers",
      "🚀 Stay consistent every day"
    ].map((tip, index) =>

      React.createElement(
        "div",
        {
          key: index,

          style: {
            background: "white",
            padding: "25px",
            borderRadius: "20px",
            boxShadow:
              "0 10px 20px rgba(0,0,0,0.1)"
          }
        },

        React.createElement(
          "h3",
          {
            style: {
              color: "#4f46e5"
            }
          },
          tip
        )
      )
    )
  )
),
// SUCCESS STORIES
React.createElement(
  "div",
  {
    style: {
      marginTop: "60px"
    }
  },

  React.createElement(
    "h2",
    {
      style: {
        fontSize: "38px",
        marginBottom: "30px"
      }
    },
    "🏆 Student Success Stories"
  ),

  React.createElement(
    "div",
    {
      style: {
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(300px,1fr))",
        gap: "25px"
      }
    },

    [
      {
        name: "Rahul Sharma",
        msg: "This planner improved my study routine!"
      },
      {
        name: "Priya Verma",
        msg: "AI Assistant helped me learn coding faster."
      },
      {
        name: "Aman Singh",
        msg: "Now I track all tasks easily."
      }
    ].map((item, index) =>

      React.createElement(
        "div",
        {
          key: index,

          style: {
            background: "white",
            padding: "30px",
            borderRadius: "25px",
            boxShadow:
              "0 10px 20px rgba(0,0,0,0.1)"
          }
        },

        React.createElement(
          "h2",
          {
            style: {
              color: "#4f46e5"
            }
          },
          "⭐ " + item.name
        ),

        React.createElement(
          "p",
          {
            style: {
              marginTop: "15px",
              lineHeight: "1.8",
              fontSize: "17px"
            }
          },
          item.msg
        )
      )
    )
  )
),
// FLOATING HELP BUTTON
React.createElement(
  "button",
  {
    onClick: () => navigate("/assistant"),

    style: {
      position: "fixed",
      bottom: "25px",
      left: "25px",
      width: "70px",
      height: "70px",
      borderRadius: "50%",
      border: "none",
      background: "#ec4899",
      color: "white",
      fontSize: "15px",
      cursor: "pointer",
      boxShadow:
        "0 10px 25px rgba(0,0,0,0.3)"
    }
  },

  "🤖"
),
  );
}

export default Home;