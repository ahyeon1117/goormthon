package com.goormthon.backend.service;

import org.springframework.stereotype.Service;

@Service
public class SingletonService {

  public SingletonService() {
    System.out.println("SingletonService instance created");
  }

  public void doSomething() {
    System.out.println("SingletonService is working.");
  }
}
