import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function Timetable() {

  const navigate = useNavigate();

  const [subject, setSubject] =
    useState("");

  const [time, setTime] =
    useState("");

  const [priority, setPriority] =
    useState("Medium");

  const [timetables, setTimetables] =
    useState([]);

  const [search, setSearch] =
    useState("");

  // LOAD DATA
  const fetchTimetable = async () => {

    const res = await axios.get(
      "http://localhost:5000/api/timetable"
    );

    setTimetables(res.data);

  };

  useEffect(() => {

    fetchTimetable();

  }, []);

  // ADD
  const addTimetable = async () => {

    if (!subject || !time) {

      alert("Fill all fields");

      return;

    }

    await axios.post(
      "http://localhost:5000/api/timetable",
      {
        subject,
        time,
        priority,
      }
    );

    setSubject("");
    setTime("");
    setPriority("Medium");

    fetchTimetable();

  };

  // COMPLETE
  const toggleComplete = async (id) => {

    await axios.put(
      `http://localhost:5000/api/timetable/${id}`
    );

    fetchTimetable();

  };

  // DELETE
  const deleteTimetable = async (id) => {

    await axios.delete(
      `http://localhost:5000/api/timetable/${id}`
    );

    fetchTimetable();

  };

  // FILTER
  const filteredData =
    timetables.filter((item) =>
      item.subject
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  const completedCount =
    timetables.filter(
      (item) => item.completed
    ).length;

  const pendingCount =
    timetables.filter(
      (item) => !item.completed
    ).length;

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >

      {/* TOP */}

      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          marginBottom: "30px",
        }}
      >

        <button
          style={{
            background: "#111827",
            color: "white",
            border: "none",
            padding: "15px 25px",
            borderRadius: "15px",
          }}
        >
          🌙 Dark Mode
        </button>

        <input
          type="text"
          placeholder="Search Subject..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          style={{
            padding: "15px",
            width: "250px",
            borderRadius: "15px",
            border: "1px solid #ddd",
          }}
        />

      </div>

      {/* TITLE */}

      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        📖 Study Timetable
      </h1>

      {/* STATS */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "30px",
        }}
      >

        <div
          style={{
            background: "#10b981",
            color: "white",
            padding: "15px 25px",
            borderRadius: "15px",
          }}
        >
          ✅ Completed:
          {" "}
          {completedCount}
        </div>

        <div
          style={{
            background: "#ef4444",
            color: "white",
            padding: "15px 25px",
            borderRadius: "15px",
          }}
        >
          ⏳ Pending:
          {" "}
          {pendingCount}
        </div>

      </div>

      {/* FORM */}

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "30px",
        }}
      >

        <input
          type="text"
          placeholder="Enter Subject"
          value={subject}
          onChange={(e) =>
            setSubject(e.target.value)
          }
          style={{
            flex: 1,
            padding: "15px",
            borderRadius: "10px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="time"
          value={time}
          onChange={(e) =>
            setTime(e.target.value)
          }
          style={{
            padding: "15px",
            borderRadius: "10px",
            border: "1px solid #ccc",
          }}
        />

        <select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value)
          }
          style={{
            padding: "15px",
            borderRadius: "10px",
          }}
        >

          <option>Low</option>
          <option>Medium</option>
          <option>High</option>

        </select>

        <button
          onClick={addTimetable}
          style={{
            background: "#4f46e5",
            color: "white",
            border: "none",
            padding: "15px 25px",
            borderRadius: "10px",
          }}
        >
          ➕ Add
        </button>

      </div>

      {/* CARDS */}

      {
        filteredData.map((item) => (

          <div
            key={item._id}
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "20px",
              marginBottom: "20px",
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
            }}
          >

            <div>

              <h2
                style={{
                  color: item.completed
                    ? "#10b981"
                    : "black",
                }}
              >
                {item.subject}
              </h2>

              <p>
                🕒 {item.time}
              </p>

              <p>
                🔥 Priority:
                {" "}
                {item.priority}
              </p>



            </div>

            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
            >

              <button
                onClick={() =>
                  toggleComplete(
                    item._id
                  )
                }
                style={{
                  background:
                    item.completed
                      ? "#f59e0b"
                      : "#22c55e",
                  color: "white",
                  border: "none",
                  padding:
                    "10px 15px",
                  borderRadius: "10px",
                }}
              >
                <button
  onClick={() => navigate("/")}
  style={{
    position: "fixed",
    bottom: "30px",
    right: "30px",
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    border: "none",
    background: "#4f46e5",
    color: "white",
    fontSize: "30px",
    cursor: "pointer",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
  }}
>
  🏠
</button>
                {
                  item.completed
                    ? "↩ Undo"
                    : "✔ Complete"
                }
              </button>

              <button
                onClick={() =>
                  deleteTimetable(
                    item._id
                  )
                }
                style={{
                  background: "#ef4444",
                  color: "white",
                  border: "none",
                  padding:
                    "10px 15px",
                  borderRadius: "10px",
                }}
              >
                🗑 Delete
              </button>

            </div>

          </div>

        ))
      }

    </div>

  );

}

export default Timetable;