
import React, {
  useEffect,
  useState
} from "react";

import axios from "axios";

import {
  useNavigate
} from "react-router-dom";

function Progress() {

  const navigate = useNavigate();

  const [progressData, setProgressData] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  // =========================
  // FETCH PROGRESS
  // =========================

  const fetchProgress = async () => {

    try {

      const response =
        await axios.get(
          "http://localhost:5000/api/progress"
        );

      setProgressData(response.data);

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);

    }

  };

  // =========================
  // LIVE UPDATE
  // =========================

  useEffect(() => {

    fetchProgress();

    const interval =
      setInterval(() => {

        fetchProgress();

      }, 3000);

    return () =>
      clearInterval(interval);

  }, []);

  // =========================
  // TOTAL CALCULATION
  // =========================

  const totalCompleted =
    progressData.reduce(
      (acc, item) =>
        acc + item.completedSubjects,
      0
    );

  const totalSubjects =
    progressData.reduce(
      (acc, item) =>
        acc + item.totalSubjects,
      0
    );

  const overallProgress =
    totalSubjects > 0
      ? Math.floor(
          (totalCompleted /
            totalSubjects) *
            100
        )
      : 0;

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

      {/* HOME BUTTON */}

      <button
        onClick={() =>
          navigate("/")
        }
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
          fontSize: "28px",
          cursor: "pointer",
          boxShadow:
            "0 5px 15px rgba(0,0,0,0.3)",
        }}
      >
        🏠
      </button>

      {/* TITLE */}

      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >

        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="progress"
          style={{
            width: "120px",
          }}
        />

        <h1
          style={{
            fontSize: "50px",
            marginTop: "10px",
            color: "#111827",
          }}
        >
          📈 Study Progress
        </h1>

      </div>

      {/* OVERALL CARD */}

      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "25px",
          marginBottom: "40px",
          boxShadow:
            "0 10px 25px rgba(0,0,0,0.1)",
        }}
      >

        <h2>
          🎯 Overall Progress
        </h2>

        <h1
          style={{
            color: "#4f46e5",
            fontSize: "55px",
          }}
        >
          {overallProgress}%
        </h1>

        {/* PROGRESS BAR */}

        <div
          style={{
            width: "100%",
            height: "25px",
            background: "#e5e7eb",
            borderRadius: "20px",
            overflow: "hidden",
            marginTop: "20px",
          }}
        >

          <div
            style={{
              width:
                `${overallProgress}%`,
              height: "100%",
              background:
                "linear-gradient(to right,#4f46e5,#9333ea)",
              transition:
                "0.5s",
            }}
          />

        </div>

        <p
          style={{
            marginTop: "20px",
            fontSize: "18px",
          }}
        >
          ✅ Completed:
          {" "}
          {totalCompleted}
        </p>

        <p
          style={{
            fontSize: "18px",
          }}
        >
          📚 Total Subjects:
          {" "}
          {totalSubjects}
        </p>

      </div>

      {/* LOADING */}

      {

        loading ? (

          <h2
            style={{
              textAlign: "center",
            }}
          >
            Loading...
          </h2>

        ) : (

          progressData.map(
            (item, index) => (

              <div
                key={index}
                style={{
                  background:
                    "white",
                  padding: "30px",
                  marginBottom: "30px",
                  borderRadius:
                    "25px",
                  boxShadow:
                    "0 10px 20px rgba(0,0,0,0.1)",
                  display: "flex",
                  alignItems:
                    "center",
                  gap: "20px",
                }}
              >

                {/* IMAGE */}

                <img
                  src="https://cdn-icons-png.flaticon.com/512/2436/2436874.png"
                  alt="study"
                  style={{
                    width:
                      "120px",
                  }}
                />

                {/* CONTENT */}

                <div
                  style={{
                    flex: 1,
                  }}
                >

                  <h2
                    style={{
                      color:
                        "#111827",
                    }}
                  >
                    📚 Progress:
                    {" "}
                    {
                      item.percentage
                    }
                    %
                  </h2>

                  <p
                    style={{
                      marginTop:
                        "10px",
                      fontSize:
                        "18px",
                    }}
                  >
                    ✅ Completed
                    Subjects:
                    {" "}
                    {
                      item.completedSubjects
                    }
                  </p>

                  <p
                    style={{
                      fontSize:
                        "18px",
                    }}
                  >
                    📖 Total
                    Subjects:
                    {" "}
                    {
                      item.totalSubjects
                    }
                  </p>

                  {/* INDIVIDUAL BAR */}

                  <div
                    style={{
                      width:
                        "100%",
                      height:
                        "20px",
                      background:
                        "#e5e7eb",
                      borderRadius:
                        "20px",
                      overflow:
                        "hidden",
                      marginTop:
                        "15px",
                    }}
                  >

                    <div
                      style={{
                        width:
                          `${item.percentage}%`,
                        height:
                          "100%",
                        background:
                          "linear-gradient(to right,#22c55e,#16a34a)",
                        transition:
                          "0.5s",
                      }}
                    />

                  </div>

                </div>

              </div>

            )
          )

        )

      }

    </div>

  );

}

export default Progress;

