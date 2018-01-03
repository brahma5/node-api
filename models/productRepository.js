var db=require('../database');
var prod = {
	getAllProduct: function(callback) {
		return db.query("select * from product", callback);
	},
	 getProductById:function(id,callback){
 
return db.query("select * from product where Id=?",[id],callback);
 },
 getProductByCategory:function(category,callback) {
	 return db.query("select * from product where category = ?",[category],callback);
 },
 addProduct:function(product,callback){
 return db.query("Insert into product values(?,?,?,?)",[product.Id,product.name,product.category,product.price],callback);
 },
 deleteProduct:function(id,callback){
  return db.query("delete from product where Id=?",[id],callback);
 },
 updateProduct:function(id,product,callback){
  return db.query("update product set name=?,category=?,price=? where Id=?",[product.name,product.category,product.price,id],callback);
 },
 getpriceWiseList:function(price,callback) {
	 return db.query("select * from product where price >=? order by price",[price],callback);
 },
 getSortedList:function(callback) {
	return db.query("select * from product order by price desc",callback);
 }
};
 module.exports=prod;