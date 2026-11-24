import dotenv from "dotenv";

dotenv.config();
console.log(process.env.GROQ_API_KEY);

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Groq from "groq-sdk";

import Chat from "./models/Chat.js";
import Task from "./models/Task.js";
import Contact from "./models/Contact.js";
import User from "./models/User.js";
import Timetable from "./models/Timetable.js";
import Progress from "./models/Progress.js";


console.log("🔥 NEW SERVER VERSION LOADED");

const app = express();

app.use(cors());
app.use(express.json());


// =======================
// MongoDB Connection
// =======================

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("✅ MongoDB Connected");
})
.catch((err) => {
  console.log("❌ MongoDB Error:", err);
});


// =======================
// LIVE PROGRESS ROUTE
// =======================

app.get("/api/progress", async (req, res) => {

  try {

    // Get all timetable subjects

    const timetables =
      await Timetable.find();

    const totalSubjects =
      timetables.length;

    // Completed subjects

    const completedSubjects =
      timetables.filter(
        (item) => item.completed === true
      ).length;

    // Percentage

    const percentage =
      totalSubjects > 0
        ? Math.floor(
            (completedSubjects /
              totalSubjects) * 100
          )
        : 0;

    // Send response

    res.json([
      {
        percentage,
        completedSubjects,
        totalSubjects,
      }
    ]);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });

  }

});



//register route

app.post("/register", async (req, res) => {

  try {

    console.log(req.body);

    const { name, email, password } = req.body;

    const newUser = new User({
      name,
      email,
      password
    });

    await newUser.save();

    console.log("✅ USER SAVED IN MONGODB");

    res.json({
      success: true,
      message: "Registration Successful"
    });

  } catch (error) {

    console.log(error);

    res.json({
      success: false,
      message: "Registration Failed"
    });

  }

});

// =======================
// CREATE TASK
// =======================

app.post("/api/tasks", async (req, res) => {

  try {

    const { title, subject } = req.body;

    const newTask = await Task.create({
      title,
      subject,
      status: "Pending"
    });

    res.json({
      success: true,
      task: newTask
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message
    });

  }

});

// =======================
// GET ALL TASKS
// =======================

app.get("/api/tasks", async (req, res) => {

  try {

    const tasks = await Task.find();

    res.json(tasks);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message
    });

  }

});


app.post("/login", async (req, res) => {

  const { email, password } = req.body;

  const user = await User.findOne({
    email,
    password
  });

  if(user){

    res.json({
      success: true,
      message: "Login Successful"
    });

  } else {

    res.json({
      success: false,
      message: "Invalid Credentials"
    });


  }

});


app.post("/api/timetable", async (req, res) => {

  try {

    const { subject, time, priority } = req.body;

    const newTimetable = await Timetable.create({
      subject,
      time,
      priority,
    });

    res.json({
      success: true,
      timetable: newTimetable,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });

  }

});

app.get("/api/timetable", async (req, res) => {

  try {

    const data = await Timetable.find();

    res.json(data);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });

  }

});
app.put("/api/timetable/:id", async (req, res) => {

  try {

    const timetable = await Timetable.findById(
      req.params.id
    );

    timetable.completed =
      !timetable.completed;

    await timetable.save();

    res.json({
      success: true,
      timetable,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });

  }

});
app.delete("/api/timetable/:id", async (req, res) => {

  try {

    await Timetable.findByIdAndDelete(
      req.params.id
    );

    res.json({
      success: true,
      message: "Deleted",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });

  }

});
// =======================
// Groq Setup
// =======================

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});


// =======================
// Home Route
// =======================

app.get("/", (req, res) => {
  res.send("AI Assistant Backend Running");
});


// =======================
// Test Route
// =======================

app.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Server Working",
  });
});


// =======================
// CREATE TASK
// =======================

app.post("/api/tasks", async (req, res) => {

  try {

    const { title, subject } = req.body;

    const newTask = await Task.create({
  title,
  subject,
  status: "Pending"
});

    res.json({
      success: true,
      task: newTask
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message
    });

  }

});

// =======================
// GET ALL TASKS
// =======================

app.get("/api/tasks", async (req, res) => {

  try {

    const tasks = await Task.find();

    res.json(tasks);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message
    });

  }

});



// =======================
// SAVE PROGRESS
// =======================

app.post("/api/progress", async (req, res) => {

  try {

    const {
      completedSubjects,
      totalSubjects,
      percentage
    } = req.body;

    const newProgress =
      await Progress.create({

        completedSubjects,
        totalSubjects,
        percentage

      });

    res.json({
      success: true,
      progress: newProgress
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message
    });

  }

});

// =======================
// GET PROGRESS
// =======================

app.get("/api/progress", async (req, res) => {

  try {

    const progress =
      await Progress.find();

    res.json(progress);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message
    });

  }

});


// =======================
// UPDATE TASK STATUS
// =======================

app.put("/api/tasks/:id", async (req, res) => {

  try {

    const updatedTask =
      await Task.findByIdAndUpdate(

        req.params.id,

        {
          status: req.body.status
        },

        { new: true }

      );

    res.json({
      success: true,
      task: updatedTask
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message
    });

  }

});


// =======================
// DELETE TASK
// =======================

app.delete("/api/tasks/:id", async (req, res) => {

  try {

    await Task.findByIdAndDelete(
      req.params.id
    );

    res.json({
      success: true,
      message: "Task Deleted"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message
    });

  }

});


// =======================
// AI TEST ROUTE
// =======================

app.get("/ai-test", async (req, res) => {

  try {

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: "What is Java?"
        }
      ],
      model: "llama-3.3-70b-versatile"
    });

    res.json({
      success: true,
      response: completion.choices[0].message.content
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message
    });

  }

});


// =======================
// MAIN AI ROUTE
// =======================

app.post("/api/ai", async (req, res) => {

  try {

    const { prompt } = req.body;

    if (!prompt) {

      return res.status(400).json({
        success: false,
        error: "Prompt is required"
      });

    }

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt
        }
      ],
      model: "llama-3.3-70b-versatile"
    });

    const aiReply =
      completion.choices[0].message.content;

    // Save Chat
    await Chat.create({
      question: prompt,
      answer: aiReply
    });

    res.json({
      success: true,
      response: aiReply
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message
    });

  }

});


// =======================
// ADMIN CHATS
// =======================

app.get("/admin/chats", async (req, res) => {

  try {

    const chats = await Chat.find();

    res.json(chats);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message
    });

  }

});

app.get("/hello", (req, res) => {
  res.send("HELLO WORKING");
});

// =======================
// SERVER START
// =======================

// =======================
// SAVE CONTACT MESSAGE
// =======================

app.post("/api/contact", async (req, res) => {

  try {

    const {
      name,
      email,
      phone,
      message
    } = req.body;

    const newContact =
      await Contact.create({
        name,
        email,
        phone,
        message
      });

    res.json({
      success: true,
      contact: newContact
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message
    });

  }

});


// =======================
// GET ALL CONTACTS
// =======================

app.get("/api/contact", async (req, res) => {

  try {

    const contacts =
      await Contact.find();

    res.json(contacts);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message
    });

  }

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});