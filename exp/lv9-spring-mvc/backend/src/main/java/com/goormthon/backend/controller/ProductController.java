package com.goormthon.backend.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.ui.Model;
import java.util.ArrayList;
import java.util.List;

    // 초기 데이터 설정
@RestController
@RequestMapping("/products")
public class ProductController {

    private List<String> productList = new ArrayList<>();

    public ProductController() {
        productList.add("Product A");
        productList.add("Product B");
    }
    @GetMapping("/view")
    public String viewProduct(Model model){
      model.addAttribute("message", "Hello, Product Page!");
      model.addAttribute("data",productList);
      return "product";
    }

    @GetMapping
    public List<String> getProducts() {
        return productList;
    }

    @PostMapping
    public String addProduct(@RequestParam String productName) {
        productList.add(productName);
        return "Product added: " + productName;
    }
}
