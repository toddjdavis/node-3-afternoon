require('dotenv').config()
const express = require('express'),
    massive = require('massive'),
    {SERVER_PORT, CONNECTION_STRING} = process.env,
    app = express(),
    port = SERVER_PORT,
    controller = require('./products_controller')

app.use(express.json())


massive(CONNECTION_STRING).then((db) => {
    app.set('db', db)
    console.log('Server and DB connected')
}).catch(err => console.log(err))

app.get('/api/products', controller.getAll)
app.get('/api/products/:id', controller.getOne)
app.put('/api/products/:id', controller.update)
app.post('/api/products', controller.create)
app.delete('/api/products/:id', controller.delete)

app.listen(port, ()=> console.log(`Server is listening on port: ${port}`))