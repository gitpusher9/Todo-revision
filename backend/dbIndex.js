const DBurl =  require("./dburl")
const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username : string,
    password : string,
    userTodos : [{
        type : mongoose.Types.ObjectId,
        ref : todos
    }] 
})

const TodosSchema = new mongoose.Schema({
    title : string,
    description : string,
    completed : bool
})

const User = mongoose.model('User', UserSchema)
const Todo = mongoose.model('Todo', TodosSchema)

model.exports = { User, Todo}
