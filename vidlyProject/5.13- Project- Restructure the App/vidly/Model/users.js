const mongoose = require("mongoose");
const Joi = require('Joi')
const jwt = require('jsonwebtoken')
const config = require('config')

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required: true,
    minlength:5,
    maxlength:50
  },
  email:{
      type: String,
      required:true,
      minlength:5,
      maxlength:255,
      unique:true
  },
  password:{
      type: String,
      required: true,
      minlength: 5,
      maxlength:1024//for hash values
  },
  isAdmin:Boolean
})

userSchema.methods.genAuthToken = function(){
  const token = jwt.sign({_id:this._id,isAdmin:this.isAdmin}, config.get('jwtPrivateKey'));
  console.log('this-->',this);
  return token
}

const User = mongoose.model('User',userSchema)

function validateUser(User) {
    const schema = {
      name: Joi.string().min(5).max(50).required(),
      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(5).max(255).required()
    };
  
    return Joi.validate(User, schema);
}

// exports.genreSchema = genreSchema;
exports.User = User
exports.validateUser = validateUser;