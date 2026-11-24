import { useNavigate } from "react-router-dom";

import React from "react";

function About() {

const navigate = useNavigate();

return React.createElement(
"div",
{
style:{
padding:"40px",
minHeight:"100vh",
background:"linear-gradient(#e0f2fe,#ede9fe)",
fontFamily:"Arial"
}
},

// TITLE
React.createElement(
"h1",
{
style:{
textAlign:"center",
fontSize:"50px",
marginBottom:"20px"
}
},
"📖 About Us"
),

// INTRO
React.createElement(
"p",
{
style:{
textAlign:"center",
fontSize:"18px",
maxWidth:"900px",
margin:"auto",
lineHeight:"1.8"
}
},
"Student Study Planner is a smart web application designed to help students manage their studies efficiently. Our platform helps students create timetables, track progress, organize tasks, and get AI-powered study assistance."
),

// MAIN SECTION
React.createElement(
"div",
{
style:{
display:"grid",
gridTemplateColumns:"repeat(3,1fr)",
gap:"25px",
marginTop:"50px"
}
},

// CARD 1
React.createElement(
"div",
{
style:{
background:"white",
padding:"25px",
borderRadius:"20px",
boxShadow:"0 6px 18px rgba(0,0,0,0.1)",
textAlign:"center"
}
},

React.createElement("h2",null,"🎯 Our Mission"),

React.createElement(
"p",
null,
"Our mission is to make studying easier, smarter, and more organized for students around the world."
)

),

// CARD 2
React.createElement(
"div",
{
style:{
background:"white",
padding:"25px",
borderRadius:"20px",
boxShadow:"0 6px 18px rgba(0,0,0,0.1)",
textAlign:"center"
}
},

React.createElement("h2",null,"🚀 Our Vision"),

React.createElement(
"p",
null,
"We aim to build an intelligent learning platform that improves productivity and student success."
)

),

// CARD 3
React.createElement(
"div",
{
style:{
background:"white",
padding:"25px",
borderRadius:"20px",
boxShadow:"0 6px 18px rgba(0,0,0,0.1)",
textAlign:"center"
}
},

React.createElement("h2",null,"💡 Smart Features"),

React.createElement(
"p",
null,
"AI Assistant, Study Planner, Timetable Generator, Progress Tracker, and Student Blogs."
)

)

),

// TEAM SECTION
React.createElement(
"div",
{
style:{
marginTop:"60px",
background:"white",
padding:"35px",
borderRadius:"25px",
boxShadow:"0 8px 20px rgba(0,0,0,0.1)",
textAlign:"center"
}
},

React.createElement(
"h2",
{style:{fontSize:"35px"}},
"👨‍💻 Our Team"
),

React.createElement(
"p",
{
style:{
marginTop:"15px",
fontSize:"17px",
lineHeight:"1.8"
}
},
"We are passionate developers and learners working together to create useful educational tools for students. This project is built using React, Node.js, Express, and OpenAI API."
)

),

// STATS SECTION
React.createElement(
"div",
{
style:{
display:"flex",
justifyContent:"space-around",
marginTop:"50px",
textAlign:"center"
}
},

["1000+ Students","24/7 AI Help","Smart Study Tools"].map((item,index)=>

React.createElement(
"div",
{
key:index,
style:{
background:"white",
padding:"25px",
width:"250px",
borderRadius:"20px",
boxShadow:"0 5px 15px rgba(0,0,0,0.1)"
}
},

React.createElement(
"h2",
{
style:{
color:"#4f46e5"
}
},
item
),

React.createElement(
"p",
null,
"Helping students improve learning experience."
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

export default About;