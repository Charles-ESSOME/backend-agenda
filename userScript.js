const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcrypt');

const insert = () => {
    const url = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';
    mongoose.connect(url,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log('Connexion à MongoDB réussie !'))
        .catch((error) => console.log('Connexion à MongoDB échouée !', error));

    const user = [
        {
            email: "Admin",
            userName: "Administrateur",
            password: 'admin'
        },
        {
            email: "charlesjutheau",
            userName: "Charles",
            password: '1234'
        }
    ]
    console.log(user);
    User.insertMany(user).then((res) => {
        console.log(res);
    }).catch((error) => {
        console.log(error);
    })

}

     insert();

