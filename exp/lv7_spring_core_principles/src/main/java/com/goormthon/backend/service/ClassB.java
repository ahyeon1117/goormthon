package com.goormthon.backend.service;

import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;

@Component
public class ClassB {

  private final ClassA classA;

  public ClassB(ClassA classA) {
    this.classA = classA;
  }

  @PostConstruct
  public void init() {
    this.classA.setClassB(this);
  }

  public void doSomething() {
    System.out.println("ClassB is working with ClassA.");
  }
}
