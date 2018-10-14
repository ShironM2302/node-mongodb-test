var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength:1,
        trim: 1
    },
    completed:{
        Type: Boolean,
        default:false
    },
    completedAt:{
        Type: Number
    }
});

module.exports = {
    Todo
}