const mongoose = require("mongoose");
const Joi = require('Joi')

const genreSchema = mongoose.Schema({
    name:{
      type:String,
      required: true,
    }
})
  
const Genre = mongoose.model('Genre',genreSchema)

function validateGenre(genre) {
    const schema = {
      name: Joi.string().min(3).required()
    };
  
    return Joi.validate(genre, schema);
}

exports.genreSchema = genreSchema;
exports.Genre = Genre
exports.validateGenre = validateGenre;