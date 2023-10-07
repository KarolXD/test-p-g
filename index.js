const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let todos = [];

// GET
app.get('/todos', (req, res) => {
    res.json(todos);
});

// POST
app.post('/todos', (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) { // Corrected the condition here
        return res.status(400).json({ error: 'Please provide title and description' });
    }

    const newTodo = { title, description };
    todos.push(newTodo);

    res.status(201).json(newTodo);
});

// Start the server
app.listen(port, () => {
    console.log("Server is running on port", port); // Corrected the console log
});
