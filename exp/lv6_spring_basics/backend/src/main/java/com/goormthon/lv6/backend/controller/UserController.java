package com.goormthon.lv6.backend.controller;

import com.goormthon.lv6.backend.dto.req.UserReq;
import com.goormthon.lv6.backend.dto.res.UserRes;
import com.goormthon.lv6.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

  @Autowired
  private UserService service;

  @GetMapping("user")
  public UserRes getUser(@RequestParam String name) {
    return service.getUser(name);
  }

  @PostMapping("user")
  public UserRes addUser(@RequestBody UserReq req) {
    return service.save(req);
  }

  @DeleteMapping("user")
  public UserRes deleteuser(@RequestParam String name) {
    return service.delete(name);
  }

  @PutMapping("user")
  public UserRes updateUser(@RequestBody UserReq req) {
    return service.save(req);
  }
}
