const mongoose = require('mongoose')
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    tag: {
        type: Array,
        require: true,
    },
    category: {
        type: Array,
        require: true
    },
    url: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        require: true
    },
    dob: {
        type: Date,
        require: true
    }
})
const movieModel = new mongoose.model('movie', movieSchema)
export default movieModel