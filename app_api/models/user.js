const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    require: true
  },
  lastName : {
    type: String,
    required: true
  }
});

mongoose.model('User', userSchema);