// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  // database reference
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b54773f23a7fa89922937e5')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   // return the updated data
  //   returnOriginal: false
  // }).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b546476e8d8f30ebc0f24ae')
  }, {
    $set: {
      name: "Jason"
    },
    $inc: {
      age: 1
    }
  }, {
    // return the updated data
    returnOriginal: false
  }).then((result)=>{
    console.log(result);
  });
});
