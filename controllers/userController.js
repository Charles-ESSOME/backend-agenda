const Event = require('../models/Events');
const ObjectId = require('mongodb').ObjectId;
const bcrypt=require('bcrypt')
const User=require('../models/User');

exports.login = (req, res, next) => {
    console.log({ email: req.body.email });
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
            if (req.body.password !=user.password) {
              return res.status(402).json({ error: 'Mot de passe incorrect !' });
            }
            res.status(200).json({
              userId: user._id,
              token: 'TOKEN'
            });
        })
      .catch(error => res.status(500).json({ error }));
  };
