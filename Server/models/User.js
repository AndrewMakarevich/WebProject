const {Schema, model, Types} = require('mongoose');
const schema = new Schema({
    firstName:{
        type: String, required: true
    }, 
    secondName:{
        type: String, required: true
    },
    email:{
         type: String, required: true, unique: true
     },
    nickName:{
        type: String, required: true, unique: true
    },
     password:{
         type: String, required: true
     },
     links: [{
         type: Types.ObjectId, ref: 'Link'
     }]
});
module.exports = model('User', schema);