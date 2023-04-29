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

// Delete
//DELETE /del/abc - abc beeing the _id of the todo item
router.delete("/del/:id", auth, async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo Deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error in Deleting Todo");
  }
});

// Update
//PUT /modify/adb
//{
//  "title": "New Title",
//  "description": "New Description"
//}
router.put("/modify/:id", auth, async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedTodo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error in Updating Todo");
  }
});

module.exports = router;
