const express = require("express");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const router = express.Router();

const auth = require("../middleware/auth");
const User = require("../models/user");
const Todo = require("../models/todo");

// Create a new Todo
router.post(
  "/add",
  [
    auth,
    check("title", "Please enter a title").not().isEmpty(),
    check("description", "Please enter a description").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { title, description } = req.body;

    try {
      const newTodo = new Todo({
        title,
        description,
      });

      const todo = await newTodo.save();

      // Add new todo to user's todos
      const user = await User.findById(req.user.id);
      user.todos.push(todo._id);
      await user.save();

      res.json(todo);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Error in Saving");
    }
  }
);

// Get all Todos for a user
router.get("/get", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("todos");
    res.json(user.todos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error in Fetching Todos");
  }
});

module.exports = router;
