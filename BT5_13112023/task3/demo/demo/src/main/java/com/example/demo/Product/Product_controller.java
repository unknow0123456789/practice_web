package com.example.demo.Product;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/product")
public class Product_controller {
    private product_service product_service;
    
    
    public Product_controller(com.example.demo.Product.product_service product_service) {
        this.product_service = product_service;
    }


    @GetMapping
	public List<product> GetProduct()
	{
		return product_service.getProduct();
	}

    @PostMapping
    public void newProduct(@RequestBody product newproduct)
    {
        product_service.addProduct(newproduct);
    }

    @DeleteMapping(path = "{productId}")
    public void deleteProduct(@PathVariable("productId") int deleteid)
    {
        product_service.deleteProductId(deleteid);
    }

    @PutMapping(path="{productId}")
    public void updateProduct(
        @PathVariable("productId") int updateid,
        @RequestParam(required = false) String newname,
        @RequestParam(required = false) String newdes,
        @RequestParam(required = false) String newimgrul,
        @RequestParam(required = true) long newprice,
        @RequestParam(required = true) int newamount
    )
    {
        product_service.updateproductbyid(updateid,newname,newdes,newimgrul,newprice,newamount);
    }
}
