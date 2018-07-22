// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  // database reference
  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5b54615a4b54215268a2a5ac')
  // }).find({name: 'Tin'}).then((count) =>{
  //   console.log(`Todos count: ${count}`);
  //   console.log(JSON.stringify(docs,undefined, 2));
  // }, (err)=>{
  //   console.log('Unable to fetch todo', err);
  // });
  db.collection('Users').find({name: 'Tin'}).toArray().then((users) =>{
    console.log(`Users: `);
    console.log(JSON.stringify(users,undefined, 2));
  }, (err)=>{
    console.log('Unable to fetch todo', err);
  });

  // client.close();
});
