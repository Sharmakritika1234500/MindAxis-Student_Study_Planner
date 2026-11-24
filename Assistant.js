import React, {
  useState
} from "react";

import axios from "axios";

import {
  useNavigate
} from "react-router-dom";

function Assistant() {

  const navigate = useNavigate();

  const [prompt, setPrompt] =
    useState("");

  const [response, setResponse] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [history, setHistory] =
    useState([]);
    

  // =========================
  // ASK AI
  // =========================

  const askAI = async () => {

    if (!prompt) {

      alert("Please enter question");

      return;

    }

    try {

      setLoading(true);

      const res =
        await axios.post(
          "http://localhost:5000/api/ai",
          {
            prompt,
          }
        );

      if (res.data.success) {

        setResponse(
          res.data.response
        );

        setHistory([
          ...history,
          {
            question: prompt,
            answer:
              res.data.response,
          },

        ]);

      } else {

        alert("AI Failed");

      }

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);

      alert("Server Error");

    }

  };

  // =========================
  // CLEAR CHAT
  // =========================

  const clearChat = () => {

    setPrompt("");
    setResponse("");

  };

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

      {/* TOP BAR */}

      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >

        <h1>
          🤖 AI Study Assistant
        </h1>

        <button
          onClick={() =>
            navigate("/")
          }
          style={{
            padding: "12px 20px",
            background: "#111827",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          🏠 Home
        </button>

      </div>

      {/* AI IMAGE */}

      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >

        <img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
          alt="AI"
          style={{
            width: "140px",
          }}
        />

        <h2
          style={{
            marginTop: "10px",
            color: "#4f46e5",
          }}
        >
          Your Smart Learning Partner
        </h2>

      </div>

      {/* MAIN BOX */}

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          background: "white",
          padding: "30px",
          borderRadius: "25px",
          boxShadow:
            "0 10px 25px rgba(0,0,0,0.2)",
        }}
      >

        {/* EXAMPLE QUESTIONS */}

        <div
          style={{
            marginBottom: "20px",
          }}
        >

          <h3>
            ✨ Example Questions
          </h3>

          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              marginTop: "10px",
            }}
          >

            {

              [
                "Explain React",
                "What is Java?",
                "Python Notes",
                "DBMS Interview Questions",
              ].map((item, index) => (

                <button
                  key={index}
                  onClick={() =>
                    setPrompt(item)
                  }
                  style={{
                    padding:
                      "10px 15px",
                    border: "none",
                    borderRadius:
                      "10px",
                    background:
                      "#eef2ff",
                    cursor: "pointer",
                  }}
                >
                  {item}
                </button>

              ))

            }

          </div>

        </div>

        {/* TEXTAREA */}

        <textarea
          placeholder="Ask anything..."
          value={prompt}
          onChange={(e) =>
            setPrompt(
              e.target.value
            )
          }
          style={{
            width: "100%",
            height: "170px",
            padding: "15px",
            borderRadius: "15px",
            border:
              "1px solid #ccc",
            fontSize: "16px",
            resize: "none",
          }}
        />

        {/* BUTTONS */}

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "20px",
          }}
        >

          <button
            onClick={askAI}
            style={{
              flex: 1,
              padding: "14px",
              background:
                "#4f46e5",
              color: "white",
              border: "none",
              borderRadius:
                "12px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            {

              loading
                ? "🤖 Thinking..."
                : "🚀 Ask AI"

            }
          </button>

          <button
            onClick={clearChat}
            style={{
              flex: 1,
              padding: "14px",
              background:
                "#ef4444",
              color: "white",
              border: "none",
              borderRadius:
                "12px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            🗑 Clear
          </button>

        </div>

        {/* LOADING */}

        {

          loading && (

            <div
              style={{
                marginTop: "20px",
                textAlign:
                  "center",
              }}
            >
              <img
                src="https://i.gifer.com/ZZ5H.gif"
                alt="loading"
                style={{
                  width: "80px",
                }}
              />
            </div>

          )

        }

        {/* AI RESPONSE */}

        {

          response && (

            <div
              style={{
                marginTop: "30px",
                background:
                  "#f3f4f6",
                padding: "25px",
                borderRadius:
                  "20px",
                lineHeight: "1.8",
              }}
            >

              <h2>
                📘 AI Response
              </h2>

              <p
                style={{
                  marginTop:
                    "15px",
                  whiteSpace:
                    "pre-wrap",
                }}
              >
                {response}
              </p>

            </div>

          )

        }

      </div>

      {/* HISTORY */}

      {

        history.length > 0 && (

          <div
            style={{
              maxWidth: "900px",
              margin:
                "40px auto",
            }}
          >

            <h2>
              🕘 Chat History
            </h2>

            {

              history.map(
                (chat, index) => (

                  <div
                    key={index}
                    style={{
                      background:
                        "white",
                      padding:
                        "20px",
                      marginTop:
                        "20px",
                      borderRadius:
                        "20px",
                      boxShadow:
                        "0 5px 15px rgba(0,0,0,0.1)",
                    }}
                  >

                    <h3>
                      ❓
                      {" "}
                      {
                        chat.question
                      }
                    </h3>

                    <p
                      style={{
                        marginTop:
                          "10px",
                        lineHeight:
                          "1.7",
                      }}
                    >
                      🤖
                      {" "}
                      {
                        chat.answer
                      }
                    </p>

                  </div>

                )
              )

            }

          </div>

        )

      }

    </div>

  );

}

export default Assistant;
