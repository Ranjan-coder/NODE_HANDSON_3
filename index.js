const express = require('express');
const route  = require('./Routes/UserRoutes');
const { Allauth } = require('./Middleware/Auth');
const app = express()


app.use(Allauth)
app.use('/api',route)

app.listen(5555,()=>{
    console.log('Server is running');
})

