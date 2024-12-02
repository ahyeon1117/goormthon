package com.goormthon.lv6.backend.service;

import com.goormthon.lv6.backend.dto.req.UserReq;
import com.goormthon.lv6.backend.dto.res.UserRes;
import com.goormthon.lv6.backend.entity.Users;
import com.goormthon.lv6.backend.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  @Autowired
  private UserRepository repository;

  public UserRes getUser(String name) {
    Users user = repository.findById(name).orElseThrow();
    return new UserRes(user.getName(), user.getAge());
  }

  @Transactional
  public UserRes save(UserReq req) {
    Users user = Users.builder().name(req.getName()).age(req.getAge()).build();
    repository.save(user);
    return new UserRes(user.getName(), user.getAge());
  }

  public UserRes delete(String name) {
    Users user = repository.findById(name).orElseThrow();
    repository.delete(user);
    return new UserRes(user.getName(), user.getAge());
  }
}
