const express=require('express')
const router=express.Router();

const eventCtrl=require('../controllers/eventController');

router.post('/event', eventCtrl.createEvent);
router.get('/event',eventCtrl.consultAllEvent);
router.get('/event/:id', eventCtrl.consultOneEvent);
router.delete('/event/:id', eventCtrl.deleteEvent);
router.put('/event/:id',eventCtrl.updateEvent);

module.exports=router;