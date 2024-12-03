package com.goormthon.backend.service;

import org.springframework.stereotype.Component;

@Component
public class ClassA {

  private ClassB classB;

  public ClassA() {
    // Default constructor
  }

  public void setClassB(ClassB classB) {
    this.classB = classB;
  }

  public void doSomething() {
    System.out.println("ClassA is working with ClassB.");
    classB.doSomething();
  }
}
