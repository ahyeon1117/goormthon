package com.goormthon.backend.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

    // 초기 데이터 설정
@Controller
@RequestMapping("/products")
public class ProductController {

    private List<String> productList = new ArrayList<>();
    
    @Autowired
    private MessageSource messageSource;
    
    public ProductController() {
        productList.add("Product A");
        productList.add("Product B");
    }
    
    @GetMapping("/ui")
    public String viewProduct(Locale locale,Model model){
      String message = messageSource.getMessage("message", null, locale);
      model.addAttribute("message", message);
      model.addAttribute("data",productList);
      return "product.html";
    }

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public List<String> getProducts() {
        return productList;
    }

    @PostMapping
    @ResponseBody
    public String addProduct(@RequestParam String productName) {
        productList.add(productName);
        return "Product added: " + productName;
    }
}
