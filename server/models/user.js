const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    profileImage: {
        type: String,
        required: true
    },
    profileName: {
        type: String,
        required: true
    },
    profile_handle: {
        type: String,
        required: true
    }
});

const User = mongoose.model("User", UserSchema)
module.exports = User