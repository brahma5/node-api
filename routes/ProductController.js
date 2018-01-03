var express = require('express');
var router = express.Router();
var product =require('../models/productRepository');

router.get('/:id?',function(req,res,next) {
	if (req.params.id) {
		product.getProductById(req.params.id,function(err,rows){
			if(err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} else {
		product.getAllProduct(function(err,rows){
			if(err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	}
});

router.post('/',function(req,resp,next) {
	product.addProduct(req.body,function(err,count) {
		if (err) {
			resp.json(err);
		} else {
			resp.json(count);
		}
	});
});

router.delete('/:id',function(req,res,next) {
	product.deleteProduct(req.params.id,function(err,count){
		if(err) {
			res.json(err);
		} else {
			res.json(count);
		}
	});
 });
 
 router.put('/:id',function(req,resp,next) {
	 product.updateProduct(req.params.id,req.body,function(err,rows){
		 if(err) {
			 resp.json(err);
		 } else {
			 resp.json(rows);
		 }
	 });
 });

 router.get('/:category', function(req,resp,next){
	 product.getProductByCategory(req.params.category,function(err,rows){
		if(err) {
			resp.json(err);
		} else {
			resp.json(rows);
		}
	 });
 });

 router.get('/List/:price?',function(req,resp,next){
	 if(req.params.price) {
	 product.getpriceWiseList(req.params.price,function(err,rows){
		 if(err) {
			 resp.json(err);
		 } else {
			 resp.json(rows);
		 }
	 });
	}
	else {
		product.getSortedList(function(err,rows){
			if(err) {
				resp.json(err);
			} else {
				resp.json(rows);
			}
		});
	}
 });
 module.exports=router;

