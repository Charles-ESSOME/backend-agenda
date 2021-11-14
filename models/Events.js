const mongoose=require('mongoose');

const userSchema=mongoose.Schema(
    {
        label:{type:String, require:true},
        description:{type:String},
        date:{ type:Number},
        lieu:{type:String}
        
    }
)

module.exports = mongoose.model('Event', userSchema);