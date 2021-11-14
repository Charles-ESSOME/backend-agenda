const Event = require('../models/Events');
const ObjectId = require('mongodb').ObjectId;


exports.createEvent = (req, res, next) => {
    delete req.body._id;
    const event = new Event({
        ...req.body
    })
    console.log(req.body);
    event.save()
        .then(() => res.status(201).json({ message: 'Evenement crée' }))
        .catch(() => res.status(404).json({ error }));
}

exports.consultAllEvent = (req, res, next) => {
    Event.find()
        .then(event => res.status(201).json(event))
        .catch(error => res.status(404).json({ error }));
}

exports.consultOneEvent = (req, res, next) => {
    Event.findOne({ _id:  ObjectId(req.params.id) })
        .then(event => {res.status(201).json(event)})
        .catch(error => res.status(404).json({ error }));
}

exports.deleteEvent = (req, res, next) => {
    Event.deleteOne({ _id: req.params.id })
        .then(event => res.status(200).json({ message: 'object supprimé' }))
        .catch(error => res.status(404).json({ error }))
}

exports.updateEvent=(req,res,next)=>{
    Event.updateOne({ _id:  ObjectId(req.params.id)}, { ...req.body})
    .then(event=>res.status(201).json({message:'évernement modifier'}))
    .catch(error=>res.status(404).json(error));
}

