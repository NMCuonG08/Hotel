package com.example.Redis.Entity;


import com.example.Redis.Repository.ProductDao;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
@RequiredArgsConstructor
public class RedisController {
    @Autowired
    private  ProductDao productDao;
    
    @PostMapping
    public Product AddProduct(@RequestBody Product product){
        return  productDao.save(product);
    }

    @GetMapping
    public List<Product> FindAllProduct(){
        return productDao.findAll();
    }

    @GetMapping("/{id}")
    public Product FindProductById(@PathVariable int id){
        return productDao.findProductById(id);
    }
    @DeleteMapping("/{id}")
    public String deleteProduct(@PathVariable int id){
        return productDao.deleteProduct(id);
    }






}
