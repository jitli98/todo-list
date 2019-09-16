## To-Do List API
This is a To-Do List API that I built to learn about creating RESTful APIs with NodeJS.

### Features

You could interact with the API by calling these routes:
* Create a New To-Do
    * POST `/api/v1/todos` 
* Retrieve a To-Do
    * GET `/api/v1/todos/<toDo-id>`
* List All Your To-Dos
    * GET `/api/v1/todos`
* Update a To-Do
    * PATCH `/api/v1/todos/<toDo-id>` 
* Delete a To-Do
    * DELETE `/api/v1/todos/<toDo-id>`

### Technologies

This was built using the Express framework and the data is persisted in MongoDB with through the use of Mongoose.
