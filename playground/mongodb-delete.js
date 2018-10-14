// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log("Unable to connect to mongodb server")
    }
    console.log("Connected to mongodb server")

    //deletemany

    // db.collection('Todos').deleteMany({text: 'Something to do'}).then((result) => {
    //     console.log(result);
    // });

    //deleteone
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });

    // findOneandDelete
    db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
        console.log(result);
    });
    
});