'use strict';
var dbConn = require('./../../config/db.config');
//Product object create
var Product = function(product){
  this.name = product.name;
  this.price = product.price;
  this.quantity = product.quantity;
  this.createdAt = new Date();
  this.updatedAt = new Date();
};
Product.create = function (newProd, result) {
dbConn.query("INSERT INTO products set ?", newProd, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
Product.findById = function (id, result) {
dbConn.query("Select * from products where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Product.findAll = function (result) {
dbConn.query("Select * from products", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('products : ', res);
  result(null, res);
}
});
};
Product.update = function(id, product, result){
dbConn.query("UPDATE products SET id=?,name=?,price=?,quantity=? WHERE id = ?", [product.id,product.name,product.price,product.quantity, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Product.delete = function(id, result){
dbConn.query("DELETE FROM products WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Product;