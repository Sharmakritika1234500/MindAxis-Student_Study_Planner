
import React, {
  useEffect,
  useState
} from "react";

import axios from "axios";

import {
  useNavigate
} from "react-router-dom";

function Task() {

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");

  const [tasks, setTasks] = useState([]);

  // =========================
  // LOAD TASKS
  // =========================

  const fetchTasks = async () => {

    try {

      const response =
        await axios.get(
          "http://localhost:5000/api/tasks"
        );

      setTasks(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchTasks();

  }, []);

  // =========================
  // ADD TASK
  // =========================

  const addTask = async () => {

    if (!title || !subject) {

      alert("Please fill all fields");
      return;

    }

    try {

      const response =
        await axios.post(
          "http://localhost:5000/api/tasks",
          {
            title,
            subject,
          }
        );

      if (response.data.success) {

        alert("Task Added");

        setTitle("");
        setSubject("");

        fetchTasks();

      }

    } catch (error) {

      console.log(error);

    }

  };

  // =========================
  // COMPLETE TASK
  // =========================

  const completeTask =
    async (id) => {

      try {

        await axios.put(
          `http://localhost:5000/api/tasks/${id}`,
          {
            status: "Completed"
          }
        );

        fetchTasks();

      } catch (error) {

        console.log(error);

      }

    };

  // =========================
  // DELETE TASK
  // =========================

  const deleteTask =
    async (id) => {

      try {

        await axios.delete(
          `http://localhost:5000/api/tasks/${id}`
        );

        fetchTasks();

      } catch (error) {

        console.log(error);

      }

    };

  // =========================
  // COUNTS
  // =========================

  const completedTasks =
    tasks.filter(
      (task) =>
        task.status === "Completed"
    ).length;

  const pendingTasks =
    tasks.length - completedTasks;

  return (

    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background:
          "linear-gradient(to right,#dbeafe,#ede9fe)",
        fontFamily: "Arial",
      }}
    >

      {/* HEADER */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >

        <h1>📝 Task Manager</h1>

        <button
          onClick={() =>
            navigate("/")
          }
          style={{
            padding: "12px 20px",
            border: "none",
            borderRadius: "10px",
            background: "#111827",
            color: "white",
            cursor: "pointer",
          }}
        >
          🏠 Home
        </button>

      </div>

      {/* STATS */}

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "30px",
          flexWrap: "wrap",
        }}
      >

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "15px",
            flex: 1,
            textAlign: "center",
          }}
        >
          <h2>{tasks.length}</h2>
          <p>Total Tasks</p>
        </div>

        <div
          style={{
            background: "#d1fae5",
            padding: "20px",
            borderRadius: "15px",
            flex: 1,
            textAlign: "center",
          }}
        >
          <h2>{completedTasks}</h2>
          <p>Completed</p>
        </div>

        <div
          style={{
            background: "#fee2e2",
            padding: "20px",
            borderRadius: "15px",
            flex: 1,
            textAlign: "center",
          }}
        >
          <h2>{pendingTasks}</h2>
          <p>Pending</p>
        </div>

      </div>

      {/* ADD TASK */}

      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          marginBottom: "40px",
        }}
      >

        <h2>Add New Task</h2>

        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "15px",
            borderRadius: "10px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) =>
            setSubject(e.target.value)
          }
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "15px",
            borderRadius: "10px",
            border: "1px solid #ccc",
          }}
        />

        <button
          onClick={addTask}
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "20px",
            border: "none",
            borderRadius: "12px",
            background: "#4f46e5",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          ➕ Add Task
        </button>

      </div>

      {/* TASK LIST */}

      {

        tasks.map((task, index) => (

          <div
          
key={task._id}


            style={{
              background: "white",
              padding: "25px",
              marginBottom: "20px",
              borderRadius: "20px",
              boxShadow:
                "0 5px 15px rgba(0,0,0,0.1)",
              borderLeft:
                task.status === "Completed"
                  ? "8px solid green"
                  : "8px solid orange",
            }}
          >

            <h2>
              📌 {task.title}
            </h2>

            <p>
              📚 Subject:
              {" "}
              {task.subject}
            </p>

            <p>
              📍 Status:
              {" "}
              <b>
                {task.status}
              </b>
            </p>

            <p>
              🕒
              {" "}
              {new Date(
                task.createdAt
              ).toLocaleString()}
            </p>

            <div
              style={{
                marginTop: "15px",
                display: "flex",
                gap: "10px",
              }}
            >

              {

                task.status !==
                  "Completed" && (

                  <button
                    onClick={() =>
                      completeTask(task._id)
                    }
                    style={{
                      padding: "10px 15px",
                      border: "none",
                      borderRadius: "10px",
                      background: "green",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    ✅ Complete
                  </button>

                )

              }

              <button
                onClick={() =>
                  deleteTask(task._id)
                }
                style={{
                  padding: "10px 15px",
                  border: "none",
                  borderRadius: "10px",
                  background: "red",
                  color: "white",
                  cursor: "pointer",
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

export default Task;

