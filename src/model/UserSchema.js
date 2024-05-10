const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        require: true,
        default: false
    },
    dob: {
        type: Date,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    movie_Id: {
        type: Array,
        require: true
    }
})
const userModel = mongoose.model('user', userSchema)
export default userModel 