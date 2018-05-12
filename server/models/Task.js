const mongoose =require('mongoose');
const Schema = mongoose.Schema;
const TaskSchema = new Schema({
    title:{
        type:String,
        default:'No Title'
    },
    content:{
        type:String,
        default:'No Content'
    },
    date:{
        type:Date,
        default:Date.now
    },
    contributors:{
        type:Schema.Types.ObjectId, //dont forget that!
        required:true
    },
    status:{
        type:Number,
        required:true
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        required:true
    },
	dueDate:{
		type:Date,
        default:Date.now
    },
    color:{
        type:String,
        default:"#2196f3"
    },
    storyId:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('task',TaskSchema);