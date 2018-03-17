const mongo = require('mongoose');
const Schema = mongo.Schema;


let ticketSchema = new Schema({
    username: {type: String,require: true},
    facultyId:{type: String, required: true},
    usertype:{type:String, require: true} // Must be one of "B" "P" "A" "G"
});

module.exports = mongo.model('User',userSchema);