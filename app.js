const express = require('express');
const mongoose=require('mongoose');
const eventRoutes=require('./routes/eventRoute');
const bodyParser=require('body-parser');
const cors=require('cors');
const userRoutes = require('./routes/userRoute');


const app = express();

const url='mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';
mongoose.connect(url,
    { useNewUrlParser: true,
      useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((error) => console.log('Connexion à MongoDB échouée !',error));
     
    app.use(express.json());
    app.use(cors({origin:true}))

  
    app.use('/api', eventRoutes);
    app.use('/api',userRoutes);
    

module.exports = app;