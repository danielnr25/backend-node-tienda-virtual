const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/auth',authRoutes)
app.use('/categories',categoryRoutes)
app.use('/products',productRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Servidor en el puerto: ${PORT}`);
})