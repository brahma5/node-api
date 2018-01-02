var db=require('../database');
var prod = {
	getAllProduct: function(callback) {
		return db.query("select * from product", callback);
	},
	 getProductById:function(id,callback){
 
return db.query("select * from product where Id=?",[id],callback);
 },
 addProduct:function(product,callback){
 return db.query("Insert into product values(?,?,?,?)",[product.Id,product.name,product.category,product.price],callback);
 },
 deleteProduct:function(id,callback){
  return db.query("delete from product where Id=?",[id],callback);
 },
 updateProduct:function(id,product,callback){
  return db.query("update product set name=?,category=?,price=? where Id=?",[product.name,product.category,product.price,id],callback);
 }
 
};
 module.exports=prod;