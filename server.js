const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const keys = require('./config/keys');
const mongoose = require('mongoose');

const todoRoutes = express.Router();
require('./models/TodoSchema');





app.use('/todos', todoRoutes);

todoRoutes.route('/:id').get((req,res) => {
    let id = req.params.id;
    Todo.findById(id, (err, todo) => {
        res.json(todo)
    })
})

todoRoutes.route('/add').post((req,res) => {
    let todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json({'todo': "todo added successfully"});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed')
        })
})

todoRoutes.route('/update/:id').post(function(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
        if (!todo)
            res.status(404).send("data is not found");
        else
            todo.todo_description = req.body.todo_description;
            todo.todo_responsible = req.body.todo_responsible;
            todo.todo_priority = req.body.todo_priority;
            todo.todo_completed = req.body.todo_completed;

            todo.save().then(todo => {
                res.json('Todo updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});



app.use(cors())
app.use(bodyParser.json());

mongoose.connect(keys.mongoURI,{ useNewUrlParser: true } );
const connection = mongoose.connection;

connection.once('open', () => console.log("MongoDB connection established successfully"));
app.get('/', (req,res) => {
    res.send({hi: 'tssshere'})
})


const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`server runs on ${PORT}`))