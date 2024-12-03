package com.goormthon.backend;

import com.goormthon.backend.service.PaymentProcessor;
import com.goormthon.backend.service.PrototypeService;
import com.goormthon.backend.service.SingletonService;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication {

  private final PaymentProcessor paymentProcessor;

  private final PaymentProcessor paymentProcessor2;

  @Autowired
  private SingletonService singletonService;

  @Autowired
  private PrototypeService prototypeService;

  // Constructor Injection with @Qualifier
  @Autowired
  public BackendApplication(
    @Qualifier("paymentProcessor") PaymentProcessor paymentProcessor,
    @Qualifier("paymentProcessor") PaymentProcessor paymentProcessor2
  ) {
    this.paymentProcessor = paymentProcessor;
    this.paymentProcessor2 = paymentProcessor2;
  }

  public static void main(String[] args) {
    SpringApplication.run(BackendApplication.class, args);
  }

  @PostConstruct
  public void test() {
    SingletonService singleton1 = singletonService;
    SingletonService singleton2 = singletonService;

    PrototypeService prototype1 = prototypeService;
    PrototypeService prototype2 = prototypeService;

    System.out.println(
      "Singleton instances are the same: " + (singleton1 == singleton2)
    );
    System.out.println(
      "Prototype instances are the same: " + (prototype1 == prototype2)
    );

    // Check if both instances are the same (Singleton Scope)
    boolean isSameInstance = paymentProcessor == paymentProcessor2;
    System.out.println(String.format("isSameInstance : %s", isSameInstance));
  }
}
