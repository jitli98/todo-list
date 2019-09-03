const ToDo = require('./../models/toDoModel');

// Function to get a single ToDo given an id
exports.getToDo = async (req, res) => {
    try {
        const toDo = await ToDo.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {toDo}
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}

// Function to get all ToDos
exports.getAllToDos = async (req, res) => {
    try {
        const toDos = await ToDo.find();
        res.status(200).json({
            status: 'success',
            data: {toDos}
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}

// Function to create a new ToDo
exports.createToDo = async (req, res) => {
    try {
        const newToDo = await ToDo.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {toDos: newToDo}
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}

// Function to update an existing ToDo
exports.updateToDo = async (req, res) => {
    try {
        const toDo = await ToDo.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            data: {toDo}
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}

// Function to delete a ToDo
exports.deleteToDo = async (req, res) => {
    try {
        await ToDo.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}