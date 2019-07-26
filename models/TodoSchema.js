const mongoose = require('mongoose');

const {Schema} = mongoose;


const TodoSchema = new Schema({
        todo_description: {
            type: String
        },
        todo_responsible: {
            type: String
        },
        todo_priority: {
            type: String
        },
        todo_completed: {
            type: Boolean
        }
})

mongoose.model('TodoSchema', TodoSchema)