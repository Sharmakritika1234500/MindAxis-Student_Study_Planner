import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const [subjects, setSubjects] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [search, setSearch] = useState("");
  const [index, setIndex] = useState(0);


/* LIVE LOAD DATA */
useEffect(() => {

  const loadSubjects = () => {

    const savedData =
      JSON.parse(
        localStorage.getItem("timetable")
      ) || [];

    setSubjects(savedData);
  };

  // FIRST LOAD
  loadSubjects();

  // AUTO LIVE UPDATE
  const interval =
    setInterval(loadSubjects, 300);

  // WHEN PAGE COMES BACK
  window.addEventListener(
    "focus",
    loadSubjects
  );

  // WHEN STORAGE CHANGES
  window.addEventListener(
    "storage",
    loadSubjects
  );

  return () => {

    clearInterval(interval);

    window.removeEventListener(
      "focus",
      loadSubjects
    );

    window.removeEventListener(
      "storage",
      loadSubjects
    );
  };

}, []);



  // IMAGE SLIDER
  const images = [

    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
  ];

  // AUTO SLIDER
  useEffect(() => {

    const slider = setInterval(() => {

      setIndex((prev) =>
        (prev + 1) % images.length
      );

    }, 3000);

    return () => clearInterval(slider);

  }, []);

  // TIMER
  useEffect(() => {

    let timer;

    if (running) {

      timer = setInterval(() => {

        setSeconds((prev) => prev + 1);

      }, 1000);
    }

    return () => clearInterval(timer);

  }, [running]);

  // SEARCH
  const filteredSubjects =
    subjects.filter((item) =>
      (item.name || "")
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  // STATS
  const completed =
    subjects.filter((item) => item.done).length;

  const pending =
    subjects.length - completed;

const progress =
subjects.length > 0
? Math.round(
    (completed / subjects.length) * 100
  )
: 0;



  return (

    <div
      style={{
        padding: "30px",
        minHeight: "100vh",
        fontFamily: "Arial",
        background: darkMode
          ? "#111827"
          : "linear-gradient(135deg,#dbeafe,#ede9fe,#fce7f3)",
        color: darkMode ? "white" : "black"
      }}
    >

      {/* TITLE */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          marginBottom: "20px"
        }}
      >
        📊 Smart Dashboard
      </h1>

      {/* MOVING TEXT */}
      <marquee
        style={{
          padding: "12px",
          background: "#4f46e5",
          color: "white",
          borderRadius: "10px",
          marginTop: "20px"
        }}
      >
        🚀 Study Hard • Stay Consistent • Achieve Success ✨
      </marquee>

      {/* IMAGE SLIDER */}
      <img
        src={images[index]}
        alt="slider"
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
          borderRadius: "20px",
          marginTop: "20px"
        }}
      />

      {/* TOP BAR */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "30px",
          flexWrap: "wrap",
          gap: "20px"
        }}
      >

        <input
          type="text"
          placeholder="🔍 Search Subject..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          style={{
            padding: "12px",
            width: "250px",
            borderRadius: "10px",
            border: "none",
            fontSize: "16px"
          }}
        />

        <button
          onClick={() =>
            setDarkMode(!darkMode)
          }
          style={{
            padding: "12px 20px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            background: "#111827",
            color: "white"
          }}
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>

      </div>

      {/* CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
          marginTop: "40px"
        }}
      >

        {/* TOTAL */}
        <div
          style={{
            background:
              "linear-gradient(to right,#4f46e5,#4338ca)",
            padding: "30px",
            borderRadius: "25px",
            color: "white"
          }}
        >
          <h2>📚 Total Subjects</h2>
          <h1>{subjects.length}</h1>
        </div>

        {/* COMPLETED */}
        <div
          style={{
            background:
              "linear-gradient(to right,#22c55e,#16a34a)",
            padding: "30px",
            borderRadius: "25px",
            color: "white"
          }}
        >
          <h2>✅ Completed</h2>
          <h1>{completed}</h1>
        </div>

        {/* PENDING */}
        <div
          style={{
            background:
              "linear-gradient(to right,#ef4444,#dc2626)",
            padding: "30px",
            borderRadius: "25px",
            color: "white"
          }}
        >
          <h2>⏳ Pending</h2>
          <h1>{pending}</h1>
        </div>

      </div>

      {/* PROGRESS */}
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "25px",
          marginTop: "40px",
          color: "black"
        }}
      >

        <h2>📈 Live Progress</h2>

        <div
          style={{
            width: "100%",
            height: "30px",
            background: "#d1d5db",
            borderRadius: "20px",
            overflow: "hidden",
            marginTop: "20px"
          }}
        >

          <div
            style={{
              width: progress + "%",
              height: "30px",
              background:
                "linear-gradient(to right,#3b82f6,#8b5cf6)",
              transition: "0.5s"
            }}
          />

        </div>

        <h1
          style={{
            marginTop: "15px",
            color: "#4f46e5"
          }}
        >
          {progress}% Completed 🚀
        </h1>

      </div>

      {/* TIMER */}
      <div
        style={{
          marginTop: "40px",
          background: "white",
          padding: "30px",
          borderRadius: "25px",
          color: "black"
        }}
      >

        <h2>⏱ Study Timer</h2>

        <h1>
          {Math.floor(seconds / 60)} :
          {String(seconds % 60).padStart(2, "0")}
        </h1>

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "20px",
            flexWrap: "wrap"
          }}
        >

          <button
            onClick={() => setRunning(true)}
            style={{
              padding: "12px",
              border: "none",
              borderRadius: "10px",
              background: "#22c55e",
              color: "white",
              cursor: "pointer"
            }}
          >
            ▶ Start
          </button>

          <button
            onClick={() => setRunning(false)}
            style={{
              padding: "12px",
              border: "none",
              borderRadius: "10px",
              background: "#f59e0b",
              color: "white",
              cursor: "pointer"
            }}
          >
            ⏸ Pause
          </button>

          <button
            onClick={() => {
              setRunning(false);
              setSeconds(0);
            }}
            style={{
              padding: "12px",
              border: "none",
              borderRadius: "10px",
              background: "#ef4444",
              color: "white",
              cursor: "pointer"
            }}
          >
            🔄 Reset
          </button>

        </div>

      </div>

      {/* SUBJECT STATUS */}
      <div
        style={{
          marginTop: "40px",
          background: "white",
          padding: "30px",
          borderRadius: "25px",
          color: "black"
        }}
      >

        <h2>📋 Subject Status</h2>

        {
          filteredSubjects.map((item, index) => (

            <div
              key={index}
              style={{
                padding: "15px",
                marginTop: "15px",
                borderRadius: "12px",
                background: "#f3f4f6",
                display: "flex",
                justifyContent: "space-between"
              }}
            >

              <span>{item.name}</span>

              <span>
                {item.done
                  ? "✅ Completed"
                  : "⏳ Pending"}
              </span>

            </div>

          ))
        }

      </div>

      {/* BUTTONS */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "40px",
          flexWrap: "wrap"
        }}
      >

        <button
          onClick={() => navigate("/")}
          style={{
            padding: "15px 20px",
            border: "none",
            borderRadius: "10px",
            background: "#6366f1",
            color: "white",
            cursor: "pointer"
          }}
        >
          🏠 Home
        </button>

        <button
          onClick={() => navigate("/progress")}
          style={{
            padding: "15px 20px",
            border: "none",
            borderRadius: "10px",
            background: "#06b6d4",
            color: "white",
            cursor: "pointer"
          }}
        >
          📈 Progress
        </button>

        <button
          onClick={() => navigate("/timetable")}
          style={{
            padding: "15px 20px",
            border: "none",
            borderRadius: "10px",
            background: "#10b981",
            color: "white",
            cursor: "pointer"
          }}
        >
          📅 Timetable
        </button>

      </div>

    </div>
  );
}

export default Dashboard;

