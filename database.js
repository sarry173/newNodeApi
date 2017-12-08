
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

var insertDocument = function(db, callback) {
    db.collection('restaurants').insertOne( {
       "address" : {
          "street" : "2 Avenue",
          "zipcode" : "10075",
          "building" : "1480",
          "lat" : "-73.9557413",
          "long" : "40.7720266",
          "borough" : "Manhattan",
          "cuisine" : "Italian",
          "name" : "Vella",
          "restaurant_id" : "41704620"
       },
    }, function(err, result) {
     assert.equal(err, null);
     console.log("Inserted a document into the restaurants collection.");
     callback();
   });
 };


 MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    insertDocument(db, function() {
        db.close();
    });
  });