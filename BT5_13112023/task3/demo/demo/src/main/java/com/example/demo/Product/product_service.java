package com.example.demo.Product;

import java.util.List;

import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
public class product_service {

	private final Product_repository product_repository;

	
    public product_service(Product_repository product_repository) {
		this.product_repository = product_repository;
	}

	
	public List<product> getProduct()
	{
		return product_repository.findAll();
	}
	public void addProduct(product newproduct)
	{
		product_repository.save(newproduct);
	}


    public void deleteProductId(int deleteid) {
		if(product_repository.existsById(deleteid))
		{
			product_repository.deleteById(deleteid);
		}
		else
		{
			throw new IllegalStateException("Product id: "+deleteid+" does not exist.");
		}
    }

	@Transactional
	public void updateproductbyid(int updateid, String newname, String newdes, String newimgrul, long newprice,
			int newamount) {
				product SelectedProduct=product_repository.findById(updateid).orElseThrow(
					()->new IllegalStateException("Product id: "+updateid+" does not exist."));
				if(newname!=null && newname!=SelectedProduct.getName()) SelectedProduct.setName(newname);
				if(newdes!=null && newdes!=SelectedProduct.getDescription()) SelectedProduct.setDescription(newdes);
				if(newimgrul!=null && newimgrul!=SelectedProduct.getImgURL()) SelectedProduct.setImgURL(newimgrul);
				if(newprice!=-1 && newprice!=SelectedProduct.getPrice()) SelectedProduct.setPrice(newprice);
				if(newamount!=-1 && newamount!=SelectedProduct.getAmount()) SelectedProduct.setAmount(newamount);

	}
}
