// mongoose allows us to interact with the database in an
// object oriented way 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
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
});

module.exports = mongoose.model('Todo', Todo);

// 'module.export' allows us to import thisimport { Server } from 'net';
// schema in to our server.js file.

// mongoose.model('Todo', Todo); mean we are creating a model
// from our schema and the model name should be 'Todo', and we are
// creating that model in based on our schema which can be found in
// todo

// With this code in place we are now ready to access
// the MongoDB database using the Todo Schema.