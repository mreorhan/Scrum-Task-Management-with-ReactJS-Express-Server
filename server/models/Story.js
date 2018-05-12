const mongoose =require('mongoose');
const Schema = mongoose.Schema;
const StorySchema = new Schema({
    title:{
        type:String,
        maxlength:30
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        
    },
    storyId:{
        type:Number,
        required:true
    },
    createdDate:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('story',StorySchema);