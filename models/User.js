const mongoose =require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username:{
        type:String,
        unique:[true,"Please different username"]
    },
    name:String,
    lastName:String,
    public:{
        type:Boolean,
    },
    profilePhoto:{
        type:String,
        default:'default.jpg'
    },
    createdDate:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('user',UserSchema);