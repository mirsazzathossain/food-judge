const mongoose = require("mongoose")
const Schema = mongoose.Schema;

var postSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    comment:{
        type: String,
        required: true
    },
    rating:{
        type: String,
        default: '0'
    },
    restaurantId:{
        type: String,
        required: true
    }

});

const Post = mongoose.model('post', postSchema);

module.exports = Post;