package com.goormthon.backend.service;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

@Service
@Scope("prototype") // 프로토타입 스코프 지정
public class PrototypeService {

  public PrototypeService() {
    System.out.println("PrototypeService instance created");
  }

  public void doSomething() {
    System.out.println("PrototypeService is working.");
  }
}
