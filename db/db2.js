const mongoose= require('mongoose');

mongoose
    .connect('mongodb://127.0.0.1:27017/authest')
    .then(() => console.log("Connected"))
    .catch(() => console.log("Error"))

//auth schema

const authSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    pass: {
        type: String,
        required: true
    }
});
const auth = mongoose.model('auth', authSchema, 'creds');

module.exports=auth;