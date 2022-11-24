const {Schema, model, ObjectId} = require('mongoose')

const User = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  diskSpace: {type: Number, required: true},
  usedSpace: {type: Number, default: 1024**3*10},
  avatar: {type: String},
  file: [{type: ObjectId, ref: 'File'}]
})

module.exports = model('User', User)