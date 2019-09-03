const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A toDo must have a name.'],
        maxlength: [40, 'A tour must have less or equal then 40 characters']
    },
    description: {
        type: String,
        trim: true
    },
    startTime: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    dueAt: {
        type: Date
    },
    completed: {
        type: Boolean,
        default: false
    },
    importance: {
        type: String,
        enum: {
            values: ['!', '!!', '!!!'],
            message: 'Importance can only be !, !! or !!!.'
        }
    }
});

const ToDo = mongoose.model('Todo', toDoSchema);

module.exports = ToDo;