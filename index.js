const express = require('express')
const{getTodoById, getAllTodo}=require('./db')
/*const getTodoById=require('./db')*/
const app = express()
const Todo=require('./todo')
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World!'))
/*app.get('/about', (req, res) => res.send("About page"))*/

//TODO --> Task manager
// Get All Todos
app.get('/all', (req, res) => {
    /*const id= req.params.id;*/
    const todos=getAllTodo();

    res.json({
        data:todos,
        msg:"Success"
    })
})
//Get a todo
app.get('/todo/:id', (req, res) => {
    const id= req.params.id;
    const todo=getTodoById(id);

    res.json({
        data:todo,
        msg:"Success"
    })
})


app.listen(port, () => console.log(`App listening on port ${port}!`))
