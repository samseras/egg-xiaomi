module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const RoleSchema = new Schema({
    title: {type: String},
    description: {type: String},
    status: {type: String,default: 1},
    add_time: {
        type: Number,
        default: Date.now()
    }
  })
  
  return mongoose.model('Role', RoleSchema)
}