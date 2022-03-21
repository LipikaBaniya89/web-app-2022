// File: ./models/products.js

//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var QuotationSchema = new Schema({
  item : String,
  price : Number,
  quantity : Number,
  date : String
});

//Export function to create "QuotationSchema" model class
module.exports = mongoose.model('Quotation', QuotationSchema );