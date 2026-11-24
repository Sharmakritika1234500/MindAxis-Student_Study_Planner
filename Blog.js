import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Blog() {

  const navigate = useNavigate();

  const posts = [
    {
      title: "How to Study Effectively",
      desc: "Use active recall and spaced repetition.",
      img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Time Management Tips",
      desc: "Plan your day and avoid distractions.",
      img: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Exam Preparation Strategy",
      desc: "Revise smartly, not harder.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    }
  ];

  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const [likes, setLikes] = useState([120, 95, 150]);
  const [currentImage, setCurrentImage] = useState(0);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const sliderImages = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop"
  ];

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        (prev + 1) % sliderImages.length
      );
    }, 3000);

    return () => clearInterval(interval);

  }, [sliderImages.length]);

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async () => {

  try {

    const response = await axios.post(
      "http://localhost:5000/api/contact",
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
      }
    );

    if (response.data.success) {

      alert("✅ Message Sent!");

      setForm({
        name: "",
        email: "",
        phone: ""
      });

    }

  } catch (err) {

    console.log(err);

    alert("❌ Server Error");

  }

};

  const addLike = (index) => {

    const updated = [...likes];

    updated[index]++;

    setLikes(updated);

  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        padding: "30px",
        background: darkMode
          ? "#111827"
          : "linear-gradient(#f0f9ff,#eef2ff)",
        minHeight: "100vh",
        color: darkMode ? "white" : "black",
        fontFamily: "Arial"
      }}
    >

      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap"
        }}
      >

        <h1
          style={{
            fontSize: "45px"
          }}
        >
          📚 Student Blog
        </h1>

        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: "12px 18px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            background: darkMode ? "#facc15" : "#111827",
            color: darkMode ? "black" : "white"
          }}
        >
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>

      </div>

      {/* MOVING TEXT */}
      <marquee
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          marginTop: "20px",
          color: "#4f46e5"
        }}
      >
        🔥 Welcome To Student Blog • Learn • Build • Grow • Succeed 🚀
      </marquee>

      {/* IMAGE SLIDER */}
      <img
        src={sliderImages[currentImage]}
        alt="slider"
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
          borderRadius: "25px",
          marginTop: "20px"
        }}
      />

      {/* SEARCH */}
      <input
        type="text"
        placeholder="🔍 Search Blogs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "14px",
          width: "100%",
          borderRadius: "12px",
          border: "none",
          marginTop: "30px",
          fontSize: "16px"
        }}
      />

      {/* BLOG GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(300px,1fr))",
          gap: "25px",
          marginTop: "30px"
        }}
      >

        {filteredPosts.map((post, index) => (

          <div
            key={index}
            style={{
              background: "white",
              padding: "18px",
              borderRadius: "25px",
              boxShadow:
                "0 10px 25px rgba(0,0,0,0.1)",
              color: "black"
            }}
          >

            <img
              src={post.img}
              alt="blog"
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "18px"
              }}
            />

            <h2
              style={{
                marginTop: "15px"
              }}
            >
              {post.title}
            </h2>

            <p
              style={{
                marginTop: "10px",
                lineHeight: "1.7"
              }}
            >
              {post.desc}
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px"
              }}
            >

              <button
                onClick={() =>
                  alert("🚀 Full Blog Coming Soon")
                }
                style={{
                  padding: "10px",
                  border: "none",
                  borderRadius: "10px",
                  background: "#6366f1",
                  color: "white",
                  cursor: "pointer"
                }}
              >
                Read More
              </button>

              <button
                onClick={() => addLike(index)}
                style={{
                  padding: "10px",
                  border: "none",
                  borderRadius: "10px",
                  background: "#ec4899",
                  color: "white",
                  cursor: "pointer"
                }}
              >
                ❤️ {likes[index]}
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* CONTACT FORM */}
      <h2
        style={{
          marginTop: "50px",
          textAlign: "center"
        }}
      >
        📞 Get In Touch
      </h2>

      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "25px",
          width: "350px",
          margin: "20px auto",
          boxShadow:
            "0 10px 25px rgba(0,0,0,0.1)",
          color: "black"
        }}
      >

        <input
          name="name"
          value={form.name}
          placeholder="Enter Name"
          onChange={handleChange}
          style={{
            margin: "10px 0",
            padding: "12px",
            width: "100%",
            borderRadius: "10px",
            border: "1px solid #ccc"
          }}
        />

        <input
          name="email"
          value={form.email}
          placeholder="Enter Email"
          onChange={handleChange}
          style={{
            margin: "10px 0",
            padding: "12px",
            width: "100%",
            borderRadius: "10px",
            border: "1px solid #ccc"
          }}
        />

        <input
          name="phone"
          value={form.phone}
          placeholder="Enter Phone"
          onChange={handleChange}
          style={{
            margin: "10px 0",
            padding: "12px",
            width: "100%",
            borderRadius: "10px",
            border: "1px solid #ccc"
          }}
        />

        <button
          onClick={handleSubmit}
          style={{
            marginTop: "15px",
            padding: "12px",
            width: "100%",
            border: "none",
            borderRadius: "10px",
            background: "#6366f1",
            color: "white",
            cursor: "pointer"
          }}
        >
          Submit
        </button>

      </div>

      {/* HELP SECTION */}
      <div
        style={{
          marginTop: "40px",
          textAlign: "center"
        }}
      >

        <h2>🛠 Need Help?</h2>

        <button
          onClick={() => navigate("/help")}
          style={{
            margin: "10px",
            padding: "12px 18px",
            border: "none",
            borderRadius: "10px"
          }}
        >
          Help Center
        </button>

        <button
          onClick={() => navigate("/about")}
          style={{
            margin: "10px",
            padding: "12px 18px",
            border: "none",
            borderRadius: "10px"
          }}
        >
          About Us
        </button>

        <button
          onClick={() => navigate("/contact")}
          style={{
            margin: "10px",
            padding: "12px 18px",
            border: "none",
            borderRadius: "10px"
          }}
        >
          Contact Us
        </button>

      </div>

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate("/")}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "15px",
          borderRadius: "50%",
          border: "none",
          background: "#6366f1",
          color: "white",
          fontSize: "20px",
          cursor: "pointer"
        }}
      >
        🏠
      </button>

    </div>
  );
}

export default Blog;