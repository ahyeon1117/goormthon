package com.goormthon.lv6.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

  @GetMapping("helloworld")
  public String getHello() {
    return new String("Hello, World");
  }
}
