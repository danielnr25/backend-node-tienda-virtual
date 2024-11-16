const express = require('express');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');

const app = express();

app.use('/auth',authRoutes)


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Servidor en el puerto: ${PORT}`);
})