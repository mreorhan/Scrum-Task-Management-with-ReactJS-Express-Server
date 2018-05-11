const mongoose =require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username:{
        type:String,
        unique:true
    },
    name:String,
    lastName:String,
    public:{
        type:Boolean,
    },
    age:Number
})

module.exports = mongoose.model('user',UserSchema);