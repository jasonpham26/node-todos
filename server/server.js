var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// var newTodo = new Todo({
//   text: 'Cook dinner',
// });

// newTodo.save().then((doc)=>{
//   console.log('Saved todo', doc);
// },(e)=>{
//   console.log('Unable to save todo');
// });

// var secondTodo = new Todo({
//   text: 'Walk the dog',
//   completed: true,
//   completedAt: 123
// });

// secondTodo.save().then((doc)=>{
//   console.log(JSON.stringify(doc, undefined, 2));
// },(e)=>{
//   console.log('Unable to save todo', e);
// })

// User
// email - require it - trim it - set type - set min of length of 1

var User = mongoose.model('User', {
  email:{
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

var user = new User({
  email: "vinhphuong0206@gmail.com"
});

user.save().then((doc)=>{
  console.log("User saved", doc);
},(e)=>{
  console.log("Unable to save user", e);
});