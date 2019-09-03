const express = require('express');
const toDoController = require('./../controllers/toDoController');

const router = express.Router(); // creates a sub router for the different directories.

router
    .route('/')
    .get(toDoController.getAllToDos)
    .post(toDoController.createToDo);

router
    .route('/:id') // gets a particular toDo with id parameter
    .get(toDoController.getToDo)
    .patch(toDoController.updateToDo)
    .delete(toDoController.deleteToDo);

module.exports = router;